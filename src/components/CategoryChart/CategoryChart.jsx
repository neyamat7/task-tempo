import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const CategoryChart = ({ tasks }) => {
  const { darkMode } = useTheme();

  const totalTasks = tasks.length;
  const categories = [
    "web development",
    "design",
    "writing",
    "video editing",
    "seo",
    "graphic design",
    "copywriting",
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-card-clr border-gray-500" : "bg-white border-gray-100"
      } rounded-2xl shadow-sm border  p-6`}
    >
      <h3
        className={`text-lg font-semibold ${
          darkMode ? "text-gray-200" : "text-gray-900"
        } mb-6`}
      >
        Task Categories
      </h3>
      <div className="space-y-4">
        {categories.map((category) => {
          const count = tasks.filter(
            (task) => task.category.toLowerCase() === category.toLowerCase()
          ).length;
          const percentage = totalTasks > 0 ? (count / totalTasks) * 100 : 0;
          return (
            <div key={category} className="flex items-center justify-between">
              <span
                className={`text-sm font-medium  ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } capitalize`}
              >
                {category}
              </span>
              <div className="flex items-center space-x-3">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }  w-6 text-right`}
                >
                  {count}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryChart;
