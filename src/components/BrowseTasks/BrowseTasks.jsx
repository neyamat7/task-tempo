import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";
import TaskItem from "../Task/TaskItem";

const BrowseTasks = () => {
  const { darkMode } = useTheme();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("https://task-tempo.vercel.app/tasks");
        const data = await res.json();

        setTasks(data);
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

        {tasks.length === 0 ? (
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
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task}></TaskItem>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseTasks;
