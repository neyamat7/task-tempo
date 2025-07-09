import { FiEye, FiLock, FiRefreshCw, FiShield } from "react-icons/fi";

const TermsBanner = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Legal & Privacy Information
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Your trust is important to us. Learn about our terms, privacy
            practices, and policies that govern your use of TaskHarbour.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <FiShield className="h-6 w-6 text-slate-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Terms of Service
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <FiLock className="h-6 w-6 text-slate-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Privacy Policy
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <FiEye className="h-6 w-6 text-slate-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Cookie Policy
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <FiRefreshCw className="h-6 w-6 text-slate-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                Refund Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsBanner;
