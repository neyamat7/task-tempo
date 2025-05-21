import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";

const TaskDetails = () => {
  const { darkMode } = useTheme();

  const { bids, user, setBids } = useAuth();

  const { taskId } = useParams();
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    setCurrentBids(bids);
  }, [user, bids]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(
          `https://task-tempo.vercel.app/tasks/${taskId}`
        );
        const data = await res.json();

        setTimeout(() => {
          setTask(data);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  function updateTaskBids(taskId) {
    if (task.bids.includes(user.uid)) {
      return;
    }

    const addNewBids = [...task.bids, user.uid];
    const newAddedBids = {
      bids: addNewBids,
    };

    fetch(`https://task-tempo.vercel.app/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedBids),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error("update bids on task failed", err);
      });
  }

  const handleBidClick = (taskId) => {
    if (bids.length && bids.includes(taskId)) {
      alert("you already have bid this task");
      return;
    }

    const updatedBids = [...bids, taskId];
    const updateThings = {
      email: user.email,
      bids: updatedBids,
    };

    fetch("https://task-tempo.vercel.app/users", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateThings),
    })
      .then((res) => res.json())
      .then((data) => {
        updateTaskBids(taskId);
        setBids(updatedBids);
        alert("Your bid has been placed!");
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section
      className={`py-12 min-h-screen ${
        darkMode ? "bg-[#493e3e]" : "bg-gray-200"
      }`}
    >
      {currentBids.length > 0 && (
        <div className="px-4 max-w-4xl mx-auto mb-6">
          <div
            className={`${
              darkMode ? "bg-[#362222]" : "bg-gray-400"
            } py-3 px-4 rounded-lg shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-white font-medium">
                  You've bid on{" "}
                  <span className="font-bold">{currentBids.length}</span>{" "}
                  opportunit{currentBids.length !== 1 ? "ies" : "y"}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  darkMode
                    ? "bg-[#423F3E] text-white"
                    : "bg-gray-500 text-white"
                }`}
              >
                Active
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4">
        <div
          className={`rounded-xl shadow-lg overflow-hidden ${
            darkMode ? "bg-[#2B2B2B] text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <div
            className={`p-6 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      darkMode
                        ? "bg-[#362222] text-gray-200"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {task.category}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      darkMode
                        ? "bg-[#423F3E] text-gray-200"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    Budget: ${task.budget}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">{task.title}</h1>
              </div>
              <div
                className={`text-right ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <p className="text-sm">Posted by</p>
                <p className="font-medium">{task.userName}</p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 ${
              darkMode ? "border-b border-gray-700" : "border-b border-gray-200"
            }`}
          >
            <h2
              className={`text-lg font-semibold mb-3 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Project Description
            </h2>
            <p
              className={`whitespace-pre-line ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {task.description}
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`flex items-center ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-[#362222]" : "bg-gray-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm opacity-70">Posted On</p>
                  <p className="font-medium">
                    {new Date(task.postedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-[#362222]" : "bg-gray-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </div>
                <div className="ml-4">
                  <p className="text-sm opacity-70">Deadline</p>
                  <p className="font-medium">
                    {new Date(task.deadline).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-6 ${darkMode ? "bg-[#171010]" : "bg-gray-50"}`}>
            <button
              onClick={() => handleBidClick(task._id)}
              className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
                darkMode
                  ? "bg-[#423F3E] hover:bg-[#362222] text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Bid for this Task
            </button>
          </div>
        </div>

        <div
          className={`mt-8 rounded-xl overflow-hidden shadow-lg ${
            darkMode ? "bg-[#2B2B2B]" : "bg-white"
          }`}
        >
          <div className={`p-4 ${darkMode ? "bg-[#362222]" : "bg-gray-400"}`}>
            <h3 className="text-white font-semibold">
              Tips for a Successful Bid
            </h3>
          </div>
          <div className="p-6">
            <ul
              className={`space-y-3 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 mt-0.5 ${
                    darkMode ? "text-gray-400" : "text-blue-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Personalize your message to match the task description.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 mt-0.5 ${
                    darkMode ? "text-gray-400" : "text-blue-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Include samples of relevant work in your portfolio.</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 mt-0.5 ${
                    darkMode ? "text-gray-400" : "text-blue-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Respond quickly — faster responses often get more attention.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
