import {
  FaEnvelope,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">TaskMarket</h3>
            <p className="text-gray-300 mb-6 text-lg">
              The premier marketplace for freelancers and clients to connect,
              collaborate, and create amazing results together.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#362222] text-white rounded-full hover:bg-[#423F3E] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#362222] text-white rounded-full hover:bg-[#423F3E] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#362222] text-white rounded-full hover:bg-[#423F3E] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#362222] text-white rounded-full hover:bg-[#423F3E] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Browse Tasks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Writing & Translation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Video & Animation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  All Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-[#423F3E]" />
                <span>
                  123 Market Street, Suite 456, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0 text-[#423F3E]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-[#423F3E]" />
                <span>support@taskmarket.com</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-semibold mb-3">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-[#171010] text-white rounded-l-lg focus:outline-none w-full"
                />
                <button className="bg-[#362222] hover:bg-[#423F3E] px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} TaskMarket. All rights reserved.
            Made with <FaHeart className="text-red-500 mx-1" /> for freelancers
          </p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
