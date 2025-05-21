import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";

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
        darkMode ? "bg-[#3d3737]" : "bg-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
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
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            No tasks available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className={`p-4 flex flex-col justify-between rounded-lg shadow-md hover:shadow-xl transition-shadow ${
                  darkMode ? "bg-[#171010]" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-md ${
                        darkMode
                          ? "bg-[#362222] text-gray-200"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {task.category}
                    </span>
                    <span
                      className={`text-sm flex items-center ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      {task.bids.length} bids
                    </span>
                  </div>

                  <h3
                    className={`whitespace-normal break-words overflow-hidden text-xl font-semibold mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </h3>

                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Posted by: {task.userName}
                  </p>

                  <div
                    className={`flex items-center mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm mr-1">Budget:</span>
                    <span className="font-medium ml-auto">${task.budget}</span>
                  </div>

                  <div
                    className={`flex items-center mb-5 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm mr-1">Deadline:</span>
                    <span className="font-medium ml-auto">
                      {new Date(task.deadline).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/details/${task._id}`}
                  className={`mt-4 w-full block text-center py-3 rounded ${
                    darkMode
                      ? "bg-[#423F3E] hover:bg-[#362222]"
                      : "bg-gray-200 hover:bg-gray-300"
                  } transition-colors ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  See Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseTasks;
