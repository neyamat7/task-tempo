import { useLocation } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const Loading = () => {
  const { darkMode } = useTheme();
  const { pathname } = useLocation();

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        darkMode ? "" : "bg-gray-200"
      } ${pathname === "/" ? "bg-transparent" : ""}  ${
        pathname === "/dashboard/all-tasks" ||
        pathname === "/dashboard/my-tasks"
          ? "lg:ml-72"
          : ""
      }`}
    >
      <div className="relative w-16 h-16 mb-4">
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent animate-spin ${
            darkMode ? "ring-2 ring-[#85A947]/30" : "ring-2 ring-[#85A947]/20"
          }`}
          style={{
            borderImage: darkMode
              ? "linear-gradient(45deg, #85A947, #FF6B6B, #4ECDC4) 1"
              : "linear-gradient(45deg, #85A947, #FF6B6B, #4ECDC4) 1",
          }}
        ></div>

        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center animate-bounce ${
            darkMode
              ? "bg-gradient-to-br from-[#85A947] to-[#4ECDC4]"
              : "bg-gradient-to-br from-[#85A947] to-[#4ECDC4]"
          }`}
        >
          <span
            className={`block w-2 h-2 rounded-full ${
              darkMode ? "bg-white" : "bg-white"
            }`}
          ></span>
        </div>
      </div>

      <p
        className={`text-sm font-medium ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
