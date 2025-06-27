import { FiAlertTriangle, FiCheck, FiX } from "react-icons/fi";

const TermsSection = () => {
  return (
    <section id="terms" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h2>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 border-l-4 border-slate-400 p-6 mb-8">
            <div className="flex items-start">
              <FiAlertTriangle className="h-6 w-6 text-slate-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-slate-700">
                  By accessing and using TaskTempo, you agree to be bound by
                  these Terms of Service and all applicable laws and
                  regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="text-slate-700 mb-4">
                Welcome to TaskTempo, a freelance task management platform.
                These Terms of Service ("Terms") govern your use of our website
                and services. By creating an account or using our services, you
                agree to these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                2. Description of Service
              </h3>
              <p className="text-slate-700 mb-4">
                TaskTempo provides a platform for freelancers and clients to
                manage tasks, projects, and collaborate effectively. Our
                services include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Task creation and management tools
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Project collaboration features
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Time tracking and reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Communication and messaging tools
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                3. User Accounts
              </h3>
              <p className="text-slate-700 mb-4">
                To use TaskTempo, you must create an account. You are
                responsible for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">
                    Providing accurate and complete information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">
                    Maintaining the security of your account credentials
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">
                    All activities that occur under your account
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                4. Prohibited Uses
              </h3>
              <p className="text-slate-700 mb-4">
                You may not use TaskTempo for any unlawful purpose or in
                violation of these Terms. Prohibited activities include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiX className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Violating any applicable laws or regulations
                  </span>
                </li>
                <li className="flex items-start">
                  <FiX className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Harassing, threatening, or intimidating other users
                  </span>
                </li>
                <li className="flex items-start">
                  <FiX className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Uploading malicious code or attempting to hack the platform
                  </span>
                </li>
                <li className="flex items-start">
                  <FiX className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">
                    Impersonating another person or entity
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                5. Limitation of Liability
              </h3>
              <p className="text-slate-700">
                TaskTempo shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of the service. Our total liability shall not exceed the
                amount paid by you for the service in the 12 months preceding
                the claim.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                6. Changes to Terms
              </h3>
              <p className="text-slate-700">
                We reserve the right to modify these Terms at any time. We will
                notify users of significant changes via email or through the
                platform. Continued use of TaskTempo after changes constitutes
                acceptance of the new Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
