import { useState } from "react";
import TaskCard from "../components/task-card.jsx";
import TaskTable from "../components/task-table.jsx";

const AllItemsPage = ({ tasks, setTasks }) => {
  const [sortBy, setSortBy] = useState("deadline");
  const [filterBy, setFilterBy] = useState("all");

  const handleEdit = (task) => {
    console.log("Edit task:", task);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterBy === "all") return true;
    return task.category === filterBy;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "deadline")
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    if (sortBy === "budget") return b.budget - a.budget;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Tasks</h1>
          <p className="text-gray-600">
            Manage all tasks in the system ({tasks.length} total)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          >
            <option value="deadline">Sort by Deadline</option>
            <option value="budget">Sort by Budget</option>
            <option value="title">Sort by Title</option>
          </select>

          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          >
            <option value="all">All Categories</option>
            <option value="web development">Web Development</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
            <option value="video editing">Video Editing</option>
            <option value="seo">SEO</option>
            <option value="graphic">Graphic</option>
            <option value="copywrite">Copywrite</option>
          </select>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-6">
        {sortedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <TaskTable
          tasks={sortedTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default AllItemsPage;
