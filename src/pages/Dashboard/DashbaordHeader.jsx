const DashboardHeader = ({ setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white sticky top-0 shadow-sm border-b border-gray-100 lg:ml-72">
      <div className="flex items-center justify-between h-16 px-8">
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
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
            <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
            <p className="text-sm text-gray-500">Manage your freelance tasks</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
