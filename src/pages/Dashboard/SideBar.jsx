import { Link, NavLink, useLocation } from "react-router";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const SideBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // import user
  const { user } = useAuth();
  const { darkMode } = useTheme();

  const navItems = [
    {
      id: "overview",
      label: "Overview",
      icon: "📊",
      description: "Dashboard insights",
      link: "/dashboard",
    },
    {
      id: "all-items",
      label: "All Tasks",
      icon: "📋",
      description: "Manage all tasks",
      link: "/dashboard/all-tasks",
    },
    {
      id: "my-items",
      label: "My Tasks",
      icon: "👤",
      description: "Your assignments",
      link: "/dashboard/my-tasks",
    },
    {
      id: "add-item",
      label: "Add Task",
      icon: "➕",
      description: "Create new task",
      link: "/dashboard/add-task",
    },
  ];

  const { pathname } = useLocation();

  const isActiveRoute = (route) => pathname === route;

  return (
    <div className="">
      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Full Height Modern Design */}
      <div
        className={`fixed top-0 left-0 w-72 h-screen bg-gradient-to-br from-slate-600 via-gray-500 to-slate-700
 shadow-2xl  z-50  transform transition-all duration-300 ease-in-out lg:translate-x-0  inset-y-0  ${
   isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
 }`}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-center justify-between h-20 px-8 border-b border-white border-opacity-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-black text-xl font-bold">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">TaskTempo</h1>
                <p className="text-xs text-white text-opacity-70">
                  Freelance Task Management
                </p>
              </div>
            </div>
            <button
              className={`lg:hidden text-white cursor-pointer ${
                darkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-white hover:bg-opacity-20"
              } p-2 rounded-lg transition-all duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-col px-6 py-8 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink to={item.link} key={item.id}>
                <button
                  className={`flex w-full items-center px-4 py-4 text-left rounded-xl transition-all duration-300 hover:transform hover:translate-x-2 hover:bg-white/30 hover:bg-opacity-15 ${
                    isActiveRoute(item.link)
                      ? "bg-white/40 border-r-4 border-white transform translate-x-2 text-white"
                      : "text-white/80 text-opacity-80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActiveRoute(item.link)
                          ? "bg-white/30 bg-opacity-30"
                          : "bg-white/20 bg-opacity-10"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium ">{item.label}</div>
                      <div className={`text-sm  text-white/80`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                  {isActiveRoute(item.link) && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* User Profile Section */}
        <div className="p-6 w-full fixed bottom-14 border-t border-white border-opacity-20">
          <div
            className={`flex items-center space-x-4 p-4 ${
              darkMode ? "bg-card-clr" : "bg-white"
            } bg-opacity-10 rounded-xl backdrop-blur-sm py-5`}
          >
            <div className="relative">
              <img
                src={
                  user?.photoURL || "https://i.postimg.cc/15ndmBW5/images.png"
                }
                alt={user?.displayName}
                className="w-12 h-12 rounded-full border-2 border-white border-opacity-30"
              />
            </div>
            <div className="flex-1">
              <p className={`${darkMode ? "text-gray-300" : "text-black"}`}>
                {user?.displayName}
              </p>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-300" : "text-black"
                  } text-opacity-70`}
                >
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/"
          className="absolute bottom-4 right-6 left-6 px-6 py-3 bg-black/50 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out text-center"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
