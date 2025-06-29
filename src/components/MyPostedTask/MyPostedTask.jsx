import { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Button from "../Button/Button";
import ClockIcon from "../Icons/ClockIcon";
import DollarIcon from "../Icons/DollarIcon";
import Loading from "../Loading/Loading";

const MyPostedTasksTable = () => {
  const { darkMode } = useTheme();
  const { pathname } = useLocation();

  const { user, setBids } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userUid = user?.uid;

    const fetchTasks = async () => {
      try {
        const res = await fetch(
          `https://task-tempo.vercel.app/user-tasks/${userUid}`
        );
        const data = await res.json();

        setTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user]);

  async function handleDeleteTask(taskId) {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(
          `https://task-tempo.vercel.app/tasks/${taskId}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          setTasks(tasks.filter((singleTask) => singleTask._id !== taskId));

          setBids((prevBids) => {
            return prevBids.filter((prevId) => prevId !== taskId);
          });

          Swal.fire("Deleted!", "Product has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete product.", "error");
        }
      } catch (err) {
        Swal.fire("Error", "Something went wrong.", "error");
        console.error(err);
      }
    }
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section
      className={`py-28 ${
        pathname === "/dashboard/my-tasks" ? "min-h-screen lg:ml-72" : ""
      } ${darkMode ? "bg-dark-clr" : "bg-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2
            className={`text-3xl font-bold mb-3 ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            My Posted Tasks
          </h2>
          <p
            className={`text-sm max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Manage your posted tasks and track their progress. View bids, update
            details, or remove listings as needed.
          </p>
        </div>

        {tasks.length < 1 ? (
          <div
            className={`flex flex-col items-center justify-center py-12 px-6 rounded-xl ${
              darkMode
                ? "bg-card-clr border border-[#423F3E]/30"
                : "bg-white border border-gray-200"
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                darkMode ? "bg-dark-clr" : "bg-gray-100"
              }`}
            >
              <FaRegLightbulb
                className={`text-2xl ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
            </div>
            <p
              className={`text-center text-lg md:text-xl font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              No tasks available at the moment.
            </p>
            <p
              className={`mt-2 text-center max-w-md ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Create your first task to start receiving bids from freelancers.
            </p>

            <div className="mt-10">
              <Button href="/add-task">Create a Task</Button>
            </div>
          </div>
        ) : (
          <>
            <div className="hidden sm:block overflow-hidden rounded-xl shadow-lg">
              <div
                className={`overflow-x-auto ${
                  darkMode ? "bg-[#2B2B2B]" : "bg-white"
                }`}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead
                    className={
                      darkMode
                        ? "bg-hover-clr text-gray-200"
                        : "bg-gray-50 text-gray-700"
                    }
                  >
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Task Details
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Deadline
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Budget
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Bids
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`divide-y ${
                      darkMode ? "divide-gray-700" : "divide-gray-200"
                    }`}
                  >
                    {tasks.map((task, index) => (
                      <tr
                        key={task._id}
                        className={`${
                          darkMode
                            ? index % 2 === 0
                              ? "bg-card-clr"
                              : "bg-hover-clr/50"
                            : index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50"
                        } hover:bg-opacity-80 transition-colors`}
                      >
                        <td
                          className={`whitespace-normal break-words px-6 py-4 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          <div className=" whitespace-normal break-words flex flex-col">
                            <span className="font-medium whitespace-normal break-words">
                              {task.title}
                            </span>
                            <span
                              className={`text-xs mt-1 ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {task.category}
                            </span>
                          </div>
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <div className="flex items-center">
                            <ClockIcon />
                            {new Date(task.deadline).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </div>
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <div className="flex items-center">
                            <DollarIcon />${task.budget}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode
                                ? task.bids.length > 0
                                  ? "bg-dark-clr text-gray-200"
                                  : "bg-hover-clr text-gray-400"
                                : task.bids.length > 0
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {task.bids.length} bid
                            {task.bids.length !== 1 && task.bids.length > 0
                              ? "s"
                              : ""}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex justify-end space-x-2">
                            <Link
                              to={`/update/${task._id}`}
                              className={`px-3 py-1 rounded-md text-xs font-medium ${
                                darkMode
                                  ? "bg-[#423F3E] hover:bg-[#362222] text-white"
                                  : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`}
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDeleteTask(task._id)}
                              className={`cursor-pointer px-3 py-1 rounded-md text-xs font-medium ${
                                darkMode
                                  ? "bg-red-900/80 hover:bg-red-900 text-white"
                                  : "bg-red-600 hover:bg-red-700 text-white"
                              }`}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="sm:hidden space-y-4">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className={`rounded-lg shadow-md overflow-hidden ${
                    darkMode ? "bg-card-clr" : "bg-white"
                  }`}
                >
                  <div
                    className={`px-4 py-3 ${
                      darkMode ? "bg-hover-clr" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                          darkMode
                            ? "bg-card-clr text-gray-200"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {task.category}
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                          darkMode
                            ? task.bids.length > 0
                              ? "bg-card-clr text-gray-200"
                              : "bg-[#423F3E]/30 text-gray-400"
                            : task.bids.length > 0
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {task.bids.length} bid
                        {task.bids.length !== 1 && task.bids.length > 0
                          ? "s"
                          : ""}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3
                      className={`font-medium text-lg mb-3 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div
                        className={`flex items-center ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <ClockIcon />
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Deadline:
                        </span>
                        <span className="ml-auto">
                          {new Date(task.deadline).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div
                        className={`flex items-center ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <DollarIcon />
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Budget:
                        </span>
                        <span className="ml-auto">${task.budget}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        to={`/update/${task._id}`}
                        className={`px-4 py-2 rounded text-center text-sm font-medium ${
                          darkMode
                            ? "bg-dark-clr hover:bg-hover-clr text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        Edit Task
                      </Link>
                      <button
                        onClick={() => handleDeleteTask(task._id)}
                        className={`px-4 py-2 rounded text-center text-sm font-medium ${
                          darkMode
                            ? "bg-red-900/80 hover:bg-red-900 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyPostedTasksTable;
