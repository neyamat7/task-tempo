import { FiDatabase, FiLock, FiShield, FiUsers } from "react-icons/fi";

const PrivacySection = () => {
  return (
    <section id="privacy" className="py-16 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h2>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <FiShield className="h-6 w-6 text-slate-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Your Privacy Matters
                </h3>
                <p className="text-slate-700">
                  At TaskTempo, we are committed to protecting your privacy and
                  ensuring the security of your personal information.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Information We Collect
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <div className="flex items-center mb-3">
                    <FiUsers className="h-5 w-5 text-slate-600 mr-2" />
                    <h4 className="font-semibold text-slate-900">
                      Personal Information
                    </h4>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Name and email address</li>
                    <li>• Profile information</li>
                    <li>• Contact details</li>
                    <li>• Payment information</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <div className="flex items-center mb-3">
                    <FiDatabase className="h-5 w-5 text-slate-600 mr-2" />
                    <h4 className="font-semibold text-slate-900">
                      Usage Information
                    </h4>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Log data and analytics</li>
                    <li>• Device information</li>
                    <li>• IP address and location</li>
                    <li>• Cookies and tracking data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                How We Use Your Information
              </h3>
              <p className="text-slate-700 mb-4">
                We use the information we collect to provide, maintain, and
                improve our services:
              </p>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Provide and operate our services
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Process transactions and payments
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Send important notifications
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Improve user experience
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Analyze usage patterns
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Prevent fraud and abuse
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Data Security
              </h3>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <FiLock className="h-6 w-6 text-slate-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Security Measures
                    </h4>
                    <p className="text-slate-700 mb-4">
                      We implement industry-standard security measures to
                      protect your personal information:
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">🔐</div>
                    <div className="text-sm font-medium text-slate-900">
                      SSL Encryption
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">🛡️</div>
                    <div className="text-sm font-medium text-slate-900">
                      Secure Servers
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">🔍</div>
                    <div className="text-sm font-medium text-slate-900">
                      Regular Audits
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Your Rights
              </h3>
              <p className="text-slate-700 mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                      1
                    </span>
                    <span className="text-slate-700">
                      Access and review your personal data
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                      2
                    </span>
                    <span className="text-slate-700">
                      Request correction of inaccurate information
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                      3
                    </span>
                    <span className="text-slate-700">
                      Request deletion of your personal data
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                      4
                    </span>
                    <span className="text-slate-700">
                      Opt-out of marketing communications
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Contact Us
              </h3>
              <p className="text-slate-700">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at{" "}
                <a
                  href="mailto:privacy@tasktempo.com"
                  className="text-slate-900 font-medium hover:underline"
                >
                  privacy@tasktempo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
