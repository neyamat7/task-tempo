import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const DollarIcon = () => {
  const { darkMode } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 mr-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default DollarIcon;
