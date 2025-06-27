import CategoryChart from "../../components/CategoryChart/CategoryChart.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import RecentTasks from "../../components/RecentTasks/RecentTasks.jsx";
import StatsCard from "../../components/StatsCard/StatsCard.jsx";
import useAuth from "../../context/AuthContext/AuthContext.jsx";

import { useQuery } from "@tanstack/react-query";
import { useTheme } from "../../context/ThemeProvider/ThemProvider.jsx";

const OverviewPage = () => {
  const { user } = useAuth();
  const { darkMode } = useTheme();

  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("https://task-tempo.vercel.app/tasks");
      const data = await res.json();
      return data;
    },
  });

  const totalTasks = tasks?.length;
  const myTasks = tasks?.filter((task) => task?.userUid === user.uid);

  const totalUserBids = tasks?.reduce((total, task) => {
    const userBids = task?.bids?.filter((bid) => bid === user.uid);
    return total + userBids.length;
  }, 0);

  const MyTotalBudget = myTasks.reduce(
    (sum, task) => sum + (parseFloat(task.budget) || 0),
    0
  );

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className={`p-8 h-full lg:ml-72 ${
        darkMode ? "bg-dark-clr" : "bg-gray-100"
      }`}
    >
      <div className="mb-8">
        <h1
          className={`${
            darkMode ? "text-gray-100" : "text-gray-900"
          } text-3xl font-bold  mb-2`}
        >
          Dashboard Overview
        </h1>
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          Welcome back, {user.displayName}!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          icon="📋"
          color="bg-blue-100"
        />
        <StatsCard
          title="My Tasks"
          value={myTasks.length}
          icon="👤"
          color="bg-green-100"
        />
        <StatsCard
          title="Bids"
          value={totalUserBids}
          icon="✅"
          color="bg-purple-100"
        />
        <StatsCard
          title="My Budgets"
          value={`$${MyTotalBudget.toLocaleString()}`}
          icon="💰"
          color="bg-yellow-100"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentTasks tasks={tasks} />
        <CategoryChart tasks={tasks} />
      </div>
    </div>
  );
};

export default OverviewPage;
