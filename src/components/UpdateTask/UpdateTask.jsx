import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
// import { useAuth } from "../../context/AuthContext/AuthContext";

const UpdateTask = () => {
  const { taskId } = useParams(); // Get task ID from URL
  const navigate = useNavigate();
  const { user } = useAuth();

  // Mock task data - replace this with real API call later
  const [task, setTask] = useState({
    title: "Design a logo for new startup",
    category: "Graphic Design",
    description: "Create a modern, minimalist logo.",
    deadline: "2025-04-15",
    budget: "150",
    userEmail: user?.email || "",
    userName: user?.displayName || "",
  });

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

  // Load task data on mount (from DB/mock)
  useEffect(() => {
    // Here you can fetch task by ID from your backend
    // Example:
    // fetch(`/api/tasks/${taskId}`).then(res => res.json()).then(data => setTask(data))
  }, [taskId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate update request
    console.log("Updated task:", task);

    // Show success notification
    toast.success("✅ Task updated successfully!");

    // Navigate back after update
    setTimeout(() => {
      navigate("/my-task");
    }, 1500);
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
            <input
              type="date"
              name="deadline"
              value={task.deadline}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#3E7B27]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85A947] bg-white text-[#123524]"
            />
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
