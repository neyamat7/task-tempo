import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";
import TaskItem from "../Task/TaskItem";

const BrowseTasks = () => {
  const { darkMode } = useTheme();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("https://task-tempo.vercel.app/tasks");
        const data = await res.json();

        setTasks(data);
        setFilteredTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section
      className={`py-10 min-h-screen ${
        darkMode ? "bg-dark-clr" : "bg-gray-200"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Browse All Tasks
        </h2>
        <p
          className={`text-center text-sm mb-10 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Find freelance work that matches your skills and interests.
        </p>

        {/* filtering option */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 px-4">
          {/* Filter by category */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="categoryFilter"
              className={`text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Filter by Category:
            </label>
            <select
              id="categoryFilter"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  setFilteredTasks(tasks);
                } else {
                  setFilteredTasks(
                    tasks.filter((task) => task.category === value)
                  );
                }
              }}
              className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm text-gray-900"
            >
              <option className="text-gray-900" value="">
                All
              </option>
              {[...new Set(tasks.map((task) => task.category))].map(
                (category) => (
                  <option
                    className="text-gray-900"
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Sort by date */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortOrder"
              className={`text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Sort by Date:
            </label>
            <select
              id="sortOrder"
              onChange={(e) => {
                const order = e.target.value;
                const sorted = [...filteredTasks].sort((a, b) => {
                  const dateA = new Date(a.deadline);
                  const dateB = new Date(b.deadline);
                  return order === "asc" ? dateA - dateB : dateB - dateA;
                });
                setFilteredTasks(sorted);
              }}
              className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 text-sm"
            >
              <option className="text-gray-900" value="desc">
                Closest First
              </option>
              <option value="asc">Farthest First</option>
            </select>
          </div>
        </div>

        {filteredTasks.length === 0 ? (
          <p
            className={`text-center py-10 ${
              darkMode ? "text-gray-400" : "text-gray-800"
            }`}
          >
            No tasks available at the moment.
          </p>
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 place-items-center ${
              darkMode ? "text-gray-200" : "text-dark-clr"
            }`}
          >
            {filteredTasks.map((task) => (
              <TaskItem key={task._id} task={task}></TaskItem>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseTasks;
