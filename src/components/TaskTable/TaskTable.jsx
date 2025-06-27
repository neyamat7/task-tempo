import { Link } from "react-router";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const TaskTable = ({ tasks, onDelete }) => {
  const { user } = useAuth();

  const { darkMode } = useTheme();

  const hasOwnedTasks = tasks.some((task) => task.userUid === user.uid);

  const thClasses = `px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
    darkMode ? "text-gray-300" : "text-gray-500"
  }`;

  return (
    <div
      className={`${
        darkMode ? "bg-dark-clr border-gray-500" : "bg-white border-gray-100"
      } rounded-2xl shadow-sm border  overflow-hidden`}
    >
      <div className="overflow-x-auto">
        <table
          className={`min-w-full divide-y ${
            darkMode ? "divide-gray-500" : "divide-gray-200"
          }`}
        >
          <thead className={`${darkMode ? "bg-card-clr" : "bg-gray-50"}`}>
            <tr>
              <th className={thClasses}>Task</th>
              <th className={thClasses}>Category</th>
              <th className={thClasses}>Deadline</th>
              <th className={thClasses}>Budget</th>

              {hasOwnedTasks && (
                <th
                  className={`px-6 py-4 text-left text-xs font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody
            className={`${
              darkMode
                ? "bg-hover-clr divide-gray-500"
                : "bg-white divide-gray-200"
            } divide-y `}
          >
            {tasks.map((task) => (
              <tr
                key={task.id}
                className={`${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"
                } transition-colors duration-200`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={
                        task.photoUrl || "/placeholder.svg?height=48&width=48"
                      }
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover shadow-sm"
                    />
                    <div className="ml-4">
                      <div
                        className={`text-sm font-medium  ${
                          darkMode ? "text-gray-300" : "text-gray-900"
                        }`}
                      >
                        {task.title}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {task.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-900"
                    } capitalize`}
                  >
                    {task.category}
                  </span>
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  {new Date(task.deadline).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                  ${task.budget.toLocaleString()}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    {task?.userUid === user?.uid && (
                      <>
                        <Link to={`/update/${task._id}`}>
                          <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200 font-medium cursor-pointer">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => onDelete(task._id)}
                          className="text-red-600 hover:text-red-900 transition-colors duration-200 font-medium cursor-pointer"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
