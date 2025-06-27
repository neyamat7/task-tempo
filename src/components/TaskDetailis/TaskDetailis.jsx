import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import CalenderIcon from "../Icons/CalenderIcon";
import ClockIcon from "../Icons/ClockIcon";
import PlusIcon from "../Icons/PlusIcon";
import TickMarkIcon from "../Icons/TickMarkIcon";
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
      toast.info("You have already bid on this task");
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
        toast.success("Your bid has been placed!");
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section
      className={`py-12 min-h-screen ${
        darkMode ? "bg-dark-clr" : "bg-gray-200"
      }`}
    >
      {currentBids.length > 0 && (
        <div className="px-4 max-w-4xl mx-auto mb-6">
          <div
            className={`${
              darkMode ? "bg-hover-clr" : "bg-gray-500"
            } py-3 px-4 rounded-lg shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PlusIcon />
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
            darkMode ? "bg-card-clr text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <div
            className={`p-6 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-3 items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-md ${
                      darkMode
                        ? "bg-dark-clr text-gray-200"
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
                className={`text-left sm:text-right flex flex-col gap-1 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <p className="text-sm">Posted by</p>
                <div className="flex flex-col">
                  <p className="font-medium">{task.userName}</p>
                  <small className="text-xs">{task.userEmail}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <img
              src={task.photoUrl}
              alt=""
              className=" w-full h-52 md:h-96 object-cover rounded-md"
            />
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
                    darkMode ? "bg-dark-clr" : "bg-gray-100"
                  }`}
                >
                  <CalenderIcon />
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
                    darkMode ? "bg-dark-clr" : "bg-gray-100"
                  }`}
                >
                  <ClockIcon />
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

          <div className={`p-6 ${darkMode ? "bg-hover-clr" : "bg-gray-50"}`}>
            <button
              onClick={() => handleBidClick(task._id)}
              className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] cursor-pointer ${
                darkMode
                  ? "bg-[#423F3E] hover:bg-card-clr text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Bid for this Task
            </button>
          </div>
        </div>

        <div
          className={`mt-8 rounded-xl overflow-hidden shadow-lg ${
            darkMode ? "bg-card-clr" : "bg-white"
          }`}
        >
          <div className={`p-4 ${darkMode ? "bg-hover-clr" : "bg-gray-400"}`}>
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
                <TickMarkIcon />
                <span>
                  Personalize your message to match the task description.
                </span>
              </li>
              <li className="flex items-start">
                <TickMarkIcon />
                <span>Include samples of relevant work in your portfolio.</span>
              </li>
              <li className="flex items-start">
                <TickMarkIcon />
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
