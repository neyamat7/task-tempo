import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const StatsCard = ({ title, value, icon, color }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode
          ? "bg-card-clr border-gray-500"
          : "bg-gradient-to-br from-white to-gray-50 border-gray-100"
      }  rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-gray-200" : "text-gray-600"
            } mb-1`}
          >
            {title}
          </p>
          <p
            className={`text-3xl font-bold  ${
              darkMode ? "text-gray-200" : "text-gray-900"
            } mb-2`}
          >
            {value}
          </p>
        </div>
        <div className={`p-4 rounded-2xl ${color}`}>
          <span className="text-3xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
