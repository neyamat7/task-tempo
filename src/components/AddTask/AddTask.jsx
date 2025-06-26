import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import { categories } from "../../data/taskCategories";
import DollarIcon from "../Icons/DollarIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import Loading from "../Loading/Loading";

const AddTask = () => {
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    category: "Web Development",
    description: "",
    deadline: new Date(),
    budget: "",
    userEmail: user?.email || "",
    userName: user?.displayName || "",
  });

  useEffect(() => {
    setTaskData({
      title: "",
      category: "Web Development",
      photoUrl: "",
      description: "",
      deadline: new Date(),
      budget: "",
      userEmail: user?.email || "",
      userName: user?.displayName || "",
      bids: [],
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };
  const handleDateChange = (date) => {
    setTaskData((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalTask = {
      ...taskData,
      userUid: user?.uid,
      postedAt: new Date(),
    };

    fetch("https://task-tempo.vercel.app/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Task posted successfully!");

          setTaskData({
            title: "",
            category: "Web Development",
            photoUrl: "",
            description: "",
            deadline: new Date(),
            budget: "",
            userEmail: user?.email || "",
            userName: user?.displayName || "",
            bids: [],
          });

          navigate("/browse-task");
        }
      })
      .catch((err) => {
        console.error("failed to add new task", err);
        toast.error("Faied to submit task");
      });
  };

  if (!user) {
    return <Loading></Loading>;
  }

  return (
    <div
      className={`min-h-screen py-12 px-4 ${
        darkMode ? "bg-dark-clr" : "bg-gray-200"
      }`}
    >
      <div
        className={`max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden ${
          darkMode
            ? "bg-card-clr border border-[#423F3E]/30"
            : "bg-white border border-gray-200"
        }`}
      >
        <div
          className={`px-6 py-8 ${darkMode ? "bg-hover-clr" : "bg-gray-50"}`}
        >
          <h2
            className={`text-2xl md:text-3xl font-bold text-center ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Post a New Task
          </h2>
          <p
            className={`text-center text-sm mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Fill in the details below to post a task for freelancers.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Task Title
              </label>
              <input
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Build a landing page"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-dark-clr border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Category
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={taskData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border appearance-none ${
                    darkMode
                      ? "bg-dark-clr border-[#423F3E] text-gray-200 focus:ring-[#423F3E] focus:border-[#423F3E]"
                      : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  } focus:outline-none focus:ring-2`}
                >
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <DownArrowIcon />
                </div>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Task Photo Url
              </label>
              <input
                type="url"
                name="photoUrl"
                value={taskData.photoUrl}
                onChange={handleChange}
                required
                placeholder="e.g., https://via.placeholder.com/500x300.png"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-dark-clr border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Description
              </label>
              <textarea
                name="description"
                value={taskData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe what needs to be done..."
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-dark-clr border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Deadline
                </label>
                <div className="flex">
                  <DatePicker
                    selected={taskData.deadline}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="dd-MM-yyyy"
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-dark-clr border-[#423F3E] text-gray-200 focus:ring-[#423F3E] focus:border-[#423F3E]"
                        : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  <div className="pointer-events-none flex items-center px-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
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
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    Budget <DollarIcon />
                  </div>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className={`${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      <DollarIcon />
                    </span>
                  </div>
                  <input
                    type="number"
                    name="budget"
                    value={taskData.budget}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="e.g., 200"
                    className={`w-full pl-8 pr-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-dark-clr border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                        : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`mt-8 p-4 rounded-lg ${
                darkMode ? "bg-hover-clr/40" : "bg-gray-50"
              }`}
            >
              <h3
                className={`text-sm font-medium mb-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Information
              </h3>

              <div className="mb-4">
                <label
                  className={`block text-xs font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={taskData.userEmail}
                  readOnly
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-dark-clr/50 border-[#423F3E] text-gray-400"
                      : "bg-gray-100 border-gray-200 text-gray-500"
                  } cursor-not-allowed`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={taskData.userName}
                  readOnly
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-dark-clr/50 border-[#423F3E] text-gray-400"
                      : "bg-gray-100 border-gray-200 text-gray-500"
                  } cursor-not-allowed`}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className={`cursor-pointer w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.01] ${
                  darkMode
                    ? "bg-dark-clr hover:bg-hover-clr text-white"
                    : "bg-card-clr hover:bg-dark-clr text-white"
                }`}
              >
                Post Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
