import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";

const FeaturedSection = () => {
  const { darkMode } = useTheme();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://task-tempo.vercel.app/featured")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data || []);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError("Failed to get fetured tasks!");
        setLoading(false);
      });
  }, []);

  return (
    <section
      className={`py-10 ${darkMode ? "bg-[#3b3636]" : "bg-gray-100"} ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Tasks</h2>
        <p className="text-center text-sm mb-8 opacity-80">
          Browse through our most popular tasks and start bidding today
        </p>

        <p className="text-center text-red-500">{error}</p>

        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2.5">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className={`inline-block w-full mb-2.5 ${
                    darkMode ? "bg-[#171010]" : "bg-white"
                  } p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
                >
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
                    <span className="text-sm opacity-80 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 opacity-70"
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
                      {task._id.slice(-2)} bids
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl mb-2 whitespace-normal break-words overflow-hidden">
                    {task.title}
                  </h3>

                  <p className="text-sm opacity-70 mb-4">
                    Looking for a freelancer to complete this task with
                    attention to detail and professionalism.
                  </p>

                  <div className="flex items-center mb-2 opacity-80">
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

                  <div className="flex items-center mb-5 opacity-80">
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

                  <Link
                    to={`/details/${task._id}`}
                    className={`mt-4 w-full block text-center py-3 rounded ${
                      darkMode
                        ? "bg-[#423F3E] hover:bg-[#362222]"
                        : "bg-gray-200 hover:bg-gray-300"
                    } transition-colors`}
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/browse-task"
                className={`inline-block px-8 py-4 border-2 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-[#171010]"
                    : "border-[#362222] text-[#362222] hover:bg-[#362222] hover:text-white"
                } rounded-lg transition-colors font-medium transform hover:scale-105 transition-transform duration-300`}
              >
                Browse All Tasks
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;



{/* <section className="py-10 bg-[#EFE3C2] text-[#123524]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Tasks</h2>
        <p className="text-center text-sm mb-8 text-[#3E7B27]">
          Find the most urgent freelance work available right now
        </p>

        <p className="text-center text-red-500">{error}</p>

        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#85A947]"
              >
                <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
                <p className="text-sm text-[#3E7B27] mb-1">
                  Category: {task.category}
                </p>
                <p className="text-sm text-[#123524] mb-3">
                  Budget: ${task.budget}
                </p>
                <p className="text-sm text-[#123524]/70">
                  Deadline:{" "}
                  <span className="font-medium text-[#123524]">
                    {new Date(task.deadline).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </p>
                <Link
                  to={`/details/${task._id}`}
                  className="mt-4 w-full btn btn-sm rounded-full bg-[#3E7B27] hover:bg-[#85A947] text-[#EFE3C2] border-none transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section> */}