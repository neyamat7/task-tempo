import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

export default function Testimonials() {
  const { darkMode } = useTheme();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "TaskMarket has completely changed how I find work. The bidding process is transparent, and I've been able to build long-term relationships with clients.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "As a small business owner, I needed help with various tasks but couldn't afford full-time employees. TaskMarket lets me find skilled professionals for specific projects.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Web Developer",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The platform is intuitive and the escrow payment system gives me peace of mind. I know I'll get paid for my work, and clients know they only pay for quality results.",
      rating: 4,
    },
  ];

  return (
    <section className={`py-20 ${darkMode ? "bg-[#171010]" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-[#362222]"
            } mb-4`}
          >
            What Our Users Say
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Join thousands of satisfied freelancers and clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-[#2B2B2B]" : "bg-gray-50"
              } p-8 rounded-xl shadow-lg relative transform hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center bg-[#362222] text-white rounded-full">
                <FaQuoteLeft />
              </div>

              <div className="mb-6 pt-4">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } italic text-lg`}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-[#423F3E]"
                />
                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-[#362222]"
                    } text-lg`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } text-sm`}
                  >
                    {testimonial.role}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 ${
            darkMode ? "bg-[#423F3E]" : "bg-[#362222]"
          } text-white p-10 rounded-xl max-w-4xl mx-auto shadow-xl`}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready
            <span style={{ color: "white", fontWeight: "bold" }}>
              <Typewriter
                words={[" to get started?"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={130}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="mb-8 text-lg">
            Join our community of freelancers and clients today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-[#362222] hover:bg-gray-100 rounded-lg transition-colors font-medium shadow-lg transform hover:scale-105 transition-transform duration-300">
              Post a Task
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#362222] rounded-lg transition-colors font-medium shadow-lg transform hover:scale-105 transition-transform duration-300">
              Find Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
