import { Link } from "react-router";
import useAuth from "../../context/AuthContext/AuthContext";

const TaskTable = ({ tasks, onDelete }) => {
  const { user } = useAuth();

  const hasOwnedTasks = tasks.some((task) => task.userUid === user.uid);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deadline
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Budget
              </th>

              {hasOwnedTasks && (
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="hover:bg-gray-50 transition-colors duration-200"
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
                      <div className="text-sm font-medium text-gray-900">
                        {task.title}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {task.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900 capitalize">
                    {task.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
