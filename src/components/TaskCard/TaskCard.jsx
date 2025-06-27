import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../context/AuthContext/AuthContext";

const TaskCard = ({ task, onDelete }) => {
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const ownedTask = task?.userUid === user?.uid;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:transform">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4 flex-1">
          <img
            src={task.photoUrl || "/placeholder.svg?height=64&width=64"}
            alt=""
            className="w-16 h-16 rounded-xl object-cover shadow-sm"
          />
          <div className="flex-1 min-w-0">
            <Link to={`/details/${task._id}`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {task.title}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 capitalize mb-2">
              {task.category}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                📅 {new Date(task.deadline).toLocaleDateString()}
              </span>
              <span className="text-sm font-semibold text-green-600">
                ${task.budget.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            {isExpanded ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="pt-4 border-t border-gray-100 animate-fadeIn">
          <p className="text-sm text-gray-600 mb-4">{task.description}</p>

          {ownedTask && (
            <div className="flex space-x-3">
              <Link
                to={`/update/${task._id}`}
                className="flex-1 px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium text-center"
              >
                Edit Task
              </Link>

              <button
                onClick={() => onDelete(task._id)}
                className="flex-1 px-4 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200 font-medium"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
