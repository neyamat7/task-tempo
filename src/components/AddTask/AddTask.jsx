import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Loading from "../Loading/Loading";

const AddTask = () => {
  const { user } = useAuth();
  const { darkMode } = useTheme();

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
      description: "",
      deadline: new Date(),
      budget: "",
      userEmail: user?.email || "",
      userName: user?.displayName || "",
      bids: [],
    });
  }, [user]);

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
        console.log(data);
        if (data.insertedId) {
          console.log("Task submitted:", finalTask);
          toast.success("Task posted successfully!");

          setTaskData({
            title: "",
            category: "Web Development",
            description: "",
            deadline: new Date(),
            budget: "",
            userEmail: user?.email || "",
            userName: user?.displayName || "",
            bids: [],
          });
        }
      });
  };

  if (!user) {
    return <Loading></Loading>;
  }

  return (
   <div
      className={`min-h-screen py-12 px-4 ${
        darkMode ? "bg-[#221a1a]" : "bg-[#EFE3C2]"
      }`}
    >
      <div
        className={`max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden ${
          darkMode
            ? "bg-[#2B2B2B] border border-[#423F3E]/30"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* Form Header */}
        <div
          className={`px-6 py-8 ${darkMode ? "bg-[#362222]" : "bg-gray-50"}`}
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

        {/* Form Body */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                value={taskData.title}
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
                  value={taskData.category}
                  onChange={handleChange}
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
                value={taskData.description}
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
                  selected={taskData.deadline}
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
                  value={taskData.budget}
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

            {/* Read Only Fields Section */}
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
                Your Information
              </h3>

              {/* Read Only - User Email */}
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
                      ? "bg-[#171010]/50 border-[#423F3E] text-gray-400"
                      : "bg-gray-100 border-gray-200 text-gray-500"
                  } cursor-not-allowed`}
                />
              </div>

              {/* Read Only - User Name */}
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
                      ? "bg-[#171010]/50 border-[#423F3E] text-gray-400"
                      : "bg-gray-100 border-gray-200 text-gray-500"
                  } cursor-not-allowed`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.01] ${
                  darkMode
                    ? "bg-[#423F3E] hover:bg-[#362222] text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
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


//  <div className="min-h-screen bg-[#EFE3C2] py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-[#85A947]/20">
//         <h2 className="text-3xl font-bold mb-6 text-center text-[#123524]">
//           Post a New Task
//         </h2>
//         <p className="text-center text-sm text-[#3E7B27] mb-8">
//           Fill in the details below to post a task for freelancers.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Task Title */}
//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Task Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={taskData.title}
//               onChange={handleChange}
//               required
//               placeholder="e.g., Build a landing page"
//               className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Category
//             </label>
//             <select
//               name="category"
//               value={taskData.category}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
//             >
//               {categories.map((cat, index) => (
//                 <option key={index} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={taskData.description}
//               onChange={handleChange}
//               required
//               rows="4"
//               placeholder="Describe what needs to be done..."
//               className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
//             ></textarea>
//           </div>

//           {/* Deadline */}

//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Deadline
//             </label>
//             <div className="relative">
//               <DatePicker
//                 selected={taskData.deadline}
//                 onChange={handleDateChange}
//                 minDate={new Date()} // Optional: prevent past dates
//                 dateFormat="yyyy-MM-dd"
//                 className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
//               />
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 absolute right-3 top-2.5 text-[#85A947]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Budget */}
//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Budget ($)
//             </label>
//             <input
//               type="number"
//               name="budget"
//               value={taskData.budget}
//               onChange={handleChange}
//               required
//               min="1"
//               placeholder="e.g., 200"
//               className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
//             />
//           </div>

//           {/* Read Only - User Email */}
//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Your Email
//             </label>
//             <input
//               type="email"
//               name="userEmail"
//               value={taskData.userEmail}
//               readOnly
//               className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md bg-[#EFE3C2] text-[#123524] cursor-not-allowed"
//             />
//           </div>

//           {/* Read Only - User Name */}
//           <div>
//             <label className="block text-sm font-medium text-[#123524] mb-1">
//               Your Name
//             </label>
//             <input
//               type="text"
//               name="userName"
//               value={taskData.userName}
//               readOnly
//               className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md bg-[#EFE3C2] text-[#123524] cursor-not-allowed"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full btn rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-[#EFE3C2] font-semibold py-3 transition-colors"
//             >
//               Post Task
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>