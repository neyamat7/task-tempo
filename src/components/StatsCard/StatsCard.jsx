const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
        </div>
        <div className={`p-4 rounded-2xl ${color}`}>
          <span className="text-3xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
