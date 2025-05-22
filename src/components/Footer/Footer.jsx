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
import { Link } from "react-router";
import SmallLink from "./SmallLink";

export default function Footer() {
  return (
    <footer className="bg-hover-clr text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">TaskTempo</h3>
            <p className="text-gray-300 mb-6 text-lg">
              The premier marketplace for freelancers and clients to connect,
              collaborate, and create amazing results together.
            </p>
            <div className="flex space-x-4">
              <SmallLink href="https://www.facebook.com">
                <FaFacebook />
              </SmallLink>
              <SmallLink href="https://x.com/">
                <FaTwitter />
              </SmallLink>
              <SmallLink href="https://www.instagram.com/">
                <FaInstagram />
              </SmallLink>
              <SmallLink href="https://www.linkedin.com/">
                <FaLinkedin />
              </SmallLink>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse-task"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Browse Tasks
                </Link>
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
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Terms & Conditions</h3>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Refund Policy
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  User Agreement
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition-colors flex items-center cursor-pointer">
                  <span className="w-2 h-2 bg-[#423F3E] rounded-full mr-2"></span>
                  Intellectual Property
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-[#423F3E]" />
                <span>123 Market Street, Dhaka 456, Mirpur, CA 94103</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0 text-[#423F3E]" />
                <span>+8801316350853</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-[#423F3E]" />
                <span>support@tasktempo.com</span>
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
                  className="px-4 py-2 bg-card-clr text-white rounded-l-lg focus:outline-none w-full"
                />
                <button className="bg-dark-clr hover:bg-[#423F3E] px-4 py-2 rounded-r-lg transition-colors cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} TaskTempo. All rights reserved.
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
