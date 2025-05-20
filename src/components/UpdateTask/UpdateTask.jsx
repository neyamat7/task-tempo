import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const navigate = useNavigate();
  const tasktoUpdate = useLoaderData();
  const [task, setTask] = useState(tasktoUpdate);
  console.log(task);

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

    fetch(`https://freelance-task-deploy-server.vercel.app/${task._id}`, {
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

  return (
    <section className="py-10 bg-[#EFE3C2] min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#123524]">
          Update Task
        </h2>
        <p className="text-center text-sm text-[#3E7B27] mb-8">
          Edit your task details below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 border border-[#85A947]/20 space-y-6"
        >
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
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
              value={task.category}
              onChange={handleChange}
              required
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
              value={task.description}
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
                selected={task.deadline}
                onChange={handleDateChange}
                minDate={new Date()}
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
              value={task.budget}
              onChange={handleChange}
              required
              min="1"
              placeholder="e.g., 200"
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
            />
          </div>

          {/* User Email (Read Only) */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={task.userEmail}
              readOnly
              className="w-full px-4 py-2 bg-[#EFE3C2] cursor-not-allowed text-[#123524] border border-[#3E7B27]/30 rounded-md"
            />
          </div>

          {/* User Name (Read Only) */}
          <div>
            <label className="block text-sm font-medium text-[#123524] mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="userName"
              value={task.userName}
              readOnly
              className="w-full px-4 py-2 bg-[#EFE3C2] cursor-not-allowed text-[#123524] border border-[#3E7B27]/30 rounded-md"
            />
          </div>

          {/* Update Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full btn rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-[#EFE3C2] font-semibold py-3 transition-colors"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateTask;
