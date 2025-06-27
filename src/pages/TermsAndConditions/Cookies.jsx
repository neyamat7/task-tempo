import {
  FiInfo,
  FiSettings,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

const CookieSection = () => {
  return (
    <section id="cookies" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Cookie Policy
          </h2>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 border-l-4 border-slate-400 p-6 mb-8">
            <div className="flex items-start">
              <FiInfo className="h-6 w-6 text-slate-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  What Are Cookies?
                </h3>
                <p className="text-slate-700">
                  Cookies are small text files stored on your device when you
                  visit our website. They help us provide you with a better
                  experience and improve our services.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Types of Cookies We Use
              </h3>
              <div className="grid gap-6">
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        Essential Cookies
                      </h4>
                    </div>
                    <FiToggleRight className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="text-slate-700 mb-3">
                    These cookies are necessary for the website to function
                    properly. They enable core functionality such as security,
                    network management, and accessibility.
                  </p>
                  <div className="text-sm text-slate-600">
                    <strong>Examples:</strong> Authentication, security, load
                    balancing
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        Performance Cookies
                      </h4>
                    </div>
                    <FiToggleRight className="h-6 w-6 text-blue-500" />
                  </div>
                  <p className="text-slate-700 mb-3">
                    These cookies collect information about how you use our
                    website, helping us understand and improve performance.
                  </p>
                  <div className="text-sm text-slate-600">
                    <strong>Examples:</strong> Google Analytics, page load
                    times, error tracking
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        Functional Cookies
                      </h4>
                    </div>
                    <FiToggleLeft className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-slate-700 mb-3">
                    These cookies enable enhanced functionality and
                    personalization, such as remembering your preferences.
                  </p>
                  <div className="text-sm text-slate-600">
                    <strong>Examples:</strong> Language preferences, theme
                    settings, form data
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        Marketing Cookies
                      </h4>
                    </div>
                    <FiToggleLeft className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-slate-700 mb-3">
                    These cookies track your browsing habits to show you
                    relevant advertisements and measure campaign effectiveness.
                  </p>
                  <div className="text-sm text-slate-600">
                    <strong>Examples:</strong> Facebook Pixel, Google Ads,
                    retargeting pixels
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Cookie Management
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <FiSettings className="h-6 w-6 text-slate-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Control Your Cookie Preferences
                    </h4>
                    <p className="text-slate-700 mb-4">
                      You can manage your cookie preferences at any time. Note
                      that disabling certain cookies may affect website
                      functionality.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <h5 className="font-medium text-slate-900 mb-2">
                      Browser Settings
                    </h5>
                    <p className="text-sm text-slate-700">
                      Most browsers allow you to control cookies through their
                      settings. You can block or delete cookies as needed.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <h5 className="font-medium text-slate-900 mb-2">
                      Cookie Banner
                    </h5>
                    <p className="text-sm text-slate-700">
                      Use our cookie banner to accept or reject non-essential
                      cookies when you first visit our site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Third-Party Cookies
              </h3>
              <p className="text-slate-700 mb-4">
                We may use third-party services that set their own cookies.
                These include:
              </p>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm font-medium text-slate-900 mb-1">
                      Analytics
                    </div>
                    <div className="text-xs text-slate-600">
                      Google Analytics
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">💬</div>
                    <div className="text-sm font-medium text-slate-900 mb-1">
                      Support
                    </div>
                    <div className="text-xs text-slate-600">
                      Live Chat Services
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-medium text-slate-900 mb-1">
                      Social Media
                    </div>
                    <div className="text-xs text-slate-600">Social Plugins</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Updates to This Policy
              </h3>
              <p className="text-slate-700">
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieSection;
