import { Link } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const Button = ({ href = "/", children }) => {
  const { darkMode } = useTheme();

  return (
    <Link
      to={href}
      className={`relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 ${
        darkMode ? "border-white" : "border-card-clr"
      } rounded-2xl shadow-md group`}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-card-clr group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span
        className={`absolute flex items-center justify-center w-full h-full ${
          darkMode ? "text-white" : "text-dark-clr"
        } transition-all duration-300 transform group-hover:translate-x-full ease`}
      >
        {children}
      </span>
      <span className="relative invisible">Button Text</span>
    </Link>
  );
};

export default Button;
