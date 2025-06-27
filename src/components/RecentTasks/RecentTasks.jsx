import { Link } from "react-router";

const RecentTasks = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Recent Tasks
        </h3>
        <p className="text-sm text-gray-500">No recent tasks found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Tasks</h3>
      <div className="space-y-4">
        {tasks
          .slice(-3)
          .reverse()
          .map((task) => (
            <Link
              to={`/details/${task._id}`}
              key={task._id}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <img
                src={task.photoUrl || "/placeholder.svg?height=48&width=48"}
                alt=""
                className="w-12 h-12 rounded-xl object-cover shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {task.title}
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  {task.category}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecentTasks;
