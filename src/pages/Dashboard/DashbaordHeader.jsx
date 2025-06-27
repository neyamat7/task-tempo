import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const DashboardHeader = ({ setIsMobileMenuOpen }) => {
  const { darkMode } = useTheme();
  return (
    <header
      className={`${
        darkMode ? "bg-card-clr border-r-gray-300" : "bg-white border-gray-100"
      } sticky top-0 shadow-sm border-b  lg:ml-72 py-[7.1px]`}
    >
      <div className="flex items-center justify-between h-16 px-8">
        <div className="flex items-center space-x-4">
          <button
            className={`${
              darkMode ? "text-gray-300" : "text-gray-500"
            } lg:hidden  hover:text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 cursor-pointer`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div>
            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Dashboard
            </h2>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Manage your freelance tasks
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
