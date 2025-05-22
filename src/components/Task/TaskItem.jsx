import { Link } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import BidsIcon from "../Icons/BidsIcon";
import ClockIcon from "../Icons/ClockIcon";
import DollarIcon from "../Icons/DollarIcon";

const TaskItem = ({ task }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={` flex flex-col justify-between ${
        darkMode ? "bg-card-clr" : "bg-white"
      } p-5 rounded-lg shadow-xl hover:shadow-lg transition-shadow`}
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <span
            className={`inline-block px-3 py-1 text-xs rounded-md ${
              darkMode
                ? "bg-dark-clr text-gray-200"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {task.category}
          </span>
          <span className="text-sm opacity-80 flex items-center">
            <BidsIcon />
            {task.bids.length} bids
          </span>
        </div>

        <h3 className="font-semibold text-xl mb-2 whitespace-normal break-words overflow-hidden">
          {task.title}
        </h3>

        <p className="text-sm opacity-70 mb-4 line-clamp-2">
          {task.description}
        </p>

        <div className="flex items-center mb-2 opacity-80">
          <DollarIcon />
          <span className="text-sm mr-1">Budget:</span>
          <span className="font-medium ml-auto">${task.budget}</span>
        </div>

        <div className="flex items-center mb-5 opacity-80">
          <ClockIcon />
          <span className="text-sm mr-1">Deadline:</span>
          <span className="font-medium ml-auto">
            {new Date(task.deadline).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <Link
        to={`/details/${task._id}`}
        className={`mt-4 w-full block text-center py-3 rounded ${
          darkMode
            ? "bg-dark-clr hover:bg-hover-clr"
            : "bg-gray-200 hover:bg-gray-300"
        } transition-colors`}
      >
        View Details
      </Link>
    </div>
  );
};

export default TaskItem;
