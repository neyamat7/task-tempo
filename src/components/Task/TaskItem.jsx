import { ArrowRight, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const TaskItem = ({ task }) => {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-sm w-full">
      <div
        className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] ${
          darkMode
            ? "bg-slate-800 shadow-2xl shadow-slate-900/20"
            : "bg-white shadow-xl shadow-slate-200/50"
        }`}
      >
        {/* Image Section with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={task?.photoUrl}
            alt={task?.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category Badge - Floating */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                darkMode
                  ? "bg-slate-900/80 text-slate-200 border border-slate-700/50"
                  : "bg-white/90 text-slate-700 border border-white/20"
              }`}
            >
              {task.category}
            </span>
          </div>

          {/* Bids Counter - Floating */}
          <div className="absolute top-4 right-4">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md ${
                darkMode
                  ? "bg-slate-900/80 text-slate-200"
                  : "bg-white/90 text-slate-700"
              }`}
            >
              <span>
                {task?.bids?.length} {task?.bids?.length === 1 ? "bid" : "bids"}{" "}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 pb-3 flex flex-col  min-h-[300px]">
          {/* Title */}
          <h3
            className={`font-bold text-lg leading-tight line-clamp-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {task.title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed line-clamp-3 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {task.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Budget */}
            <div
              className={`flex items-center gap-2 p-3 rounded-xl ${
                darkMode ? "bg-slate-700/50" : "bg-slate-50"
              }`}
            >
              <div
                className={`p-1.5 rounded-lg ${
                  darkMode
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                <DollarSign className="w-3 h-3" />
              </div>
              <div>
                <p
                  className={`text-xs font-medium ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Budget
                </p>
                <p
                  className={`text-sm font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  ${task.budget.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Deadline */}
            <div
              className={`flex items-center gap-2 p-3 rounded-xl ${
                darkMode ? "bg-slate-700/50" : "bg-slate-50"
              }`}
            >
              <div
                className={`p-1.5 rounded-lg ${
                  darkMode
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <Clock className="w-3 h-3" />
              </div>
              <div>
                <p
                  className={`text-xs font-medium ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Deadline
                </p>
                <p
                  className={`text-sm font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {new Date(task.deadline).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1"></div>

          {/* Action Button */}
          <Link to={`/details/${task._id}`}>
            <button
              className={`w-full mt-4 group/btn relative overflow-hidden rounded-xl py-3.5 px-6 font-semibold text-sm transition-all duration-300 ${
                darkMode
                  ? "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white shadow-lg shadow-slate-900/25"
                  : "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg shadow-slate-900/25"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Details
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
