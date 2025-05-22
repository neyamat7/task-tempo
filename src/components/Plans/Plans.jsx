import { FaCheck } from "react-icons/fa";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import { plans } from "../../data/plansData";

export default function Plans() {
  const { darkMode } = useTheme();

  return (
    <section className={`py-20 ${darkMode ? "bg-dark-clr" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-[#362222]"
            } mb-4`}
          >
            Simple Plans, Big Impact
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Choose Your Plan, No Treasure Map Needed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-card-clr" : "bg-white"
              } rounded-xl shadow-lg overflow-hidden ${
                plan.popular
                  ? "ring-4 ring-[#362222] transform scale-105 md:scale-110 z-10"
                  : ""
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="bg-dark-clr text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-[#362222]"
                    } mb-4`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span
                      className={`text-4xl font-bold ${
                        darkMode ? "text-white" : "text-[#362222]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        } ml-2`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheck className="text-[#362222] mr-3 flex-shrink-0" />
                        <span
                          className={`${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mb-6 w-full py-4 rounded-lg transition-colors font-medium ${
                    plan.popular
                      ? "bg-dark-clr hover:bg-[#423F3E] text-white"
                      : `${
                          darkMode
                            ? "border-2 bg-dark-clr border-white text-white hover:bg-hover-clr hover:text-white"
                            : "border-2 border-[#0f0808] text-[#362222] hover:bg-[#362222] hover:text-white"
                        }`
                  } transform hover:scale-105 transition-transform duration-300`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
