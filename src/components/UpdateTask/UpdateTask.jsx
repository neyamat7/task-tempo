import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";

const UpdateTask = () => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();
  // const tasktoUpdate = useLoaderData();
  const [task, setTask] = useState({});
  const { taskId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://task-tempo.vercel.app/tasks/${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw new Error("failed to fetch task to be updated");
      });
  }, [taskId]);

  const categories = [
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
    "Video Editing",
    "SEO",
    "Graphic Design",
    "Copywriting",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };
  const handleDateChange = (date) => {
    setTask((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id, ...updatedData } = task;
    console.log(updatedData);

    const updatedTaskData = updatedData;

    fetch(`https://task-tempo.vercel.app/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully updated product",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/my-tasks");
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section
      className={`py-12 px-4 min-h-screen ${
        darkMode ? "bg-[#221a1a]" : "bg-[#EFE3C2]"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`rounded-xl shadow-lg overflow-hidden ${
            darkMode ? "bg-[#2B2B2B] border border-[#423F3E]/30" : "bg-white"
          }`}
        >
          {/* Form Header */}
          <div
            className={`px-6 py-8 ${darkMode ? "bg-[#362222]" : "bg-white"}`}
          >
            <h2
              className={`text-2xl md:text-3xl font-bold text-center ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Update Task
            </h2>
            <p
              className={`text-center text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Edit your task details to attract the right freelancers
            </p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Task Title */}
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
                value={task.title}
                onChange={handleChange}
                required
                placeholder="e.g., Build a landing page"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
              />
            </div>

            {/* Category */}
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
                  value={task.category}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border appearance-none ${
                    darkMode
                      ? "bg-[#171010] border-[#423F3E] text-gray-200 focus:ring-[#423F3E] focus:border-[#423F3E]"
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
                  <svg
                    className={`h-4 w-4 ${
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
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
                value={task.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe what needs to be done..."
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
              ></textarea>
            </div>

            {/* Two Column Layout for Deadline and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deadline */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Deadline
                </label>
                <div className="relative">
                  <DatePicker
                    selected={task.deadline}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-[#171010] border-[#423F3E] text-gray-200 focus:ring-[#423F3E] focus:border-[#423F3E]"
                        : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
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

              {/* Budget */}
              <div>
                <label
                  className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Budget ($)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className={`${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      $
                    </span>
                  </div>
                  <input
                    type="number"
                    name="budget"
                    value={task.budget}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="e.g., 200"
                    className={`w-full pl-8 pr-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                        : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                  />
                </div>
              </div>
            </div>

            {/* User Information Section */}
            <div
              className={`mt-8 p-4 rounded-lg ${
                darkMode ? "bg-[#362222]/30" : "bg-gray-50"
              }`}
            >
              <h3
                className={`text-sm font-medium mb-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Task Owner Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* User Email (Read Only) */}
                <div>
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
                    value={task.userEmail}
                    readOnly
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode
                        ? "bg-[#171010]/50 border-[#423F3E] text-gray-400"
                        : "bg-gray-100 border-gray-200 text-gray-500"
                    } cursor-not-allowed`}
                  />
                </div>

                {/* User Name (Read Only) */}
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
                    value={task.userName}
                    readOnly
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode
                        ? "bg-[#171010]/50 border-[#423F3E] text-gray-400"
                        : "bg-gray-100 border-gray-200 text-gray-500"
                    } cursor-not-allowed`}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.01] ${
                  darkMode
                    ? "bg-[#423F3E] hover:bg-[#362222] text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Update Task
              </button>

              <Link
                to="/my-tasks"
                className={`flex-1 py-3 px-4 rounded-lg font-medium text-center transition-colors ${
                  darkMode
                    ? "bg-transparent border border-[#423F3E] text-gray-300 hover:bg-[#362222]"
                    : "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateTask;

 
