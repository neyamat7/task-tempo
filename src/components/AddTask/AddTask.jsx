import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import Loading from "../Loading/Loading";

const AddTask = () => {
  const { user } = useAuth();

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

    fetch("https://freelance-task-deploy-server.vercel.app/addtask", {
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
    <div className="min-h-screen bg-[#EFE3C2] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-[#85A947]/20">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#123524]">
          Post a New Task
        </h2>
        <p className="text-center text-sm text-[#3E7B27] mb-8">
          Fill in the details below to post a task for freelancers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Build a landing page"
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Category
            </label>
            <select
              name="category"
              value={taskData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe what needs to be done..."
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
            ></textarea>
          </div>

          {/* Deadline */}

          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Deadline
            </label>
            <div className="relative">
              <DatePicker
                selected={taskData.deadline}
                onChange={handleDateChange}
                minDate={new Date()} // Optional: prevent past dates
                dateFormat="yyyy-MM-dd"
                className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-2.5 text-[#85A947]"
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

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              value={taskData.budget}
              onChange={handleChange}
              required
              min="1"
              placeholder="e.g., 200"
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
            />
          </div>

          {/* Read Only - User Email */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={taskData.userEmail}
              readOnly
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md bg-[#EFE3C2] text-[#123524] cursor-not-allowed"
            />
          </div>

          {/* Read Only - User Name */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="userName"
              value={taskData.userName}
              readOnly
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md bg-[#EFE3C2] text-[#123524] cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full btn rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-[#EFE3C2] font-semibold py-3 transition-colors"
            >
              Post Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
