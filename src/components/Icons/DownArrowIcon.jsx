import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const DownArrowIcon = () => {
  const { darkMode } = useTheme();
  return (
    <svg
      className={`h-4 w-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default DownArrowIcon;
