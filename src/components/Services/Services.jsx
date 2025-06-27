import {
  FaClipboardList,
  FaHandshake,
  FaMoneyBillWave,
  FaUserCheck,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Button from "../Button/Button";

export default function Services() {
  const { darkMode } = useTheme();

  const steps = [
    {
      icon: (
        <FaClipboardList
          className={`text-5xl ${darkMode ? "text-white" : "text-[#362222]"}`}
        />
      ),
      title: "Post a Task",
      description:
        "Describe what you need done, set your budget, and deadline.",
    },
    {
      icon: (
        <FaUserCheck
          className={`text-5xl ${darkMode ? "text-white" : "text-[#362222]"}`}
        />
      ),
      title: "Receive Bids",
      description: "Get bids from skilled freelancers ready to help you.",
    },
    {
      icon: (
        <FaHandshake
          className={`text-5xl ${darkMode ? "text-white" : "text-[#362222]"}`}
        />
      ),
      title: "Choose & Collaborate",
      description:
        "Select the best freelancer and work together to complete the task.",
    },
    {
      icon: (
        <FaMoneyBillWave
          className={`text-5xl ${darkMode ? "text-white" : "text-[#362222]"}`}
        />
      ),
      title: "Pay Securely",
      description:
        "Release payment only when you're completely satisfied with the work.",
    },
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? "bg-card-clr" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-dark-clr"
            } mb-4`}
          >
            From Vision to Victory: The Flow
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Our simple process makes it easy to get your tasks done
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <div
                className={`w-24 h-24 flex items-center justify-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } rounded-full mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300`}
              >
                {step.icon}
              </div>
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-dark-clr"
                } mb-3`}
              >
                {step.title}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 transform -translate-x-8">
                  <div
                    className={`h-0.5 w-3/4 ${
                      darkMode ? "bg-[#423F3E]" : "bg-gray-300"
                    }`}
                  ></div>
                  <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      className={`w-6 h-6 ${
                        darkMode ? "text-[#423F3E]" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/add-task">Get Started Now</Button>
        </div>
      </div>
    </section>
  );
}
