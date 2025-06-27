import { FiCheckCircle, FiClock, FiDollarSign, FiMail } from "react-icons/fi";

const RefundSection = () => {
  return (
    <section id="refund" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Refund Policy
          </h2>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <FiDollarSign className="h-6 w-6 text-slate-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Our Commitment
                </h3>
                <p className="text-slate-700">
                  We want you to be completely satisfied with TaskTempo. If
                  you're not happy with our service, we're here to help with our
                  fair refund policy.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Refund Eligibility
              </h3>
              <div className="grid gap-6">
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiClock className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-slate-900">
                      30-Day Money-Back Guarantee
                    </h4>
                  </div>
                  <p className="text-slate-700 mb-4">
                    We offer a full refund within 30 days of your initial
                    subscription if you're not satisfied with our service.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <FiCheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div className="text-sm text-green-800">
                        <strong>Eligible:</strong> New subscribers, unused
                        accounts, technical issues preventing service use
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    Refund Conditions
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                        1
                      </span>
                      <span className="text-slate-700">
                        Request must be made within 30 days of purchase
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                        2
                      </span>
                      <span className="text-slate-700">
                        Account must not have exceeded usage limits
                        significantly
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                        3
                      </span>
                      <span className="text-slate-700">
                        No violation of our Terms of Service
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mr-3 flex-shrink-0">
                        4
                      </span>
                      <span className="text-slate-700">
                        Provide reason for refund request
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Subscription Plans
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Monthly Subscriptions
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Full refund available within 30 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pro-rated refunds for unused time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cancel anytime without penalty</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Annual Subscriptions
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Full refund within first 30 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pro-rated refund after 30 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Minimum 6-month usage required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                How to Request a Refund
              </h3>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FiMail className="h-6 w-6 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      1. Contact Support
                    </h4>
                    <p className="text-sm text-slate-700">
                      Email us at{" "}
                      <a
                        href="mailto:refunds@tasktempo.com"
                        className="text-slate-900 font-medium hover:underline"
                      >
                        refunds@tasktempo.com
                      </a>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-slate-600 font-bold">📝</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      2. Provide Details
                    </h4>
                    <p className="text-sm text-slate-700">
                      Include your account email, subscription details, and
                      reason for refund
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FiClock className="h-6 w-6 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      3. Processing Time
                    </h4>
                    <p className="text-sm text-slate-700">
                      Refunds are processed within 5-7 business days after
                      approval
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Non-Refundable Items
              </h3>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <p className="text-slate-700 mb-4">
                  The following items are not eligible for refunds:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Add-on services and premium features
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Custom development work
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Third-party integrations
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Training and consultation services
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Accounts terminated for policy violations
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        Subscriptions older than 30 days (partial refund only)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Contact Information
              </h3>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <p className="text-slate-700 mb-4">
                  For refund requests or questions about our refund policy,
                  please contact our support team:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">
                      Email Support
                    </h5>
                    <p className="text-slate-700">
                      <a
                        href="mailto:refunds@tasktempo.com"
                        className="text-slate-900 font-medium hover:underline"
                      >
                        refunds@tasktempo.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2">
                      Response Time
                    </h5>
                    <p className="text-slate-700">
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundSection;
