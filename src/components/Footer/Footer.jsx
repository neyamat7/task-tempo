import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#123524] text-[#EFE3C2] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-[#85A947]">F</span>reelance{" "}
              <span className="text-[#85A947]">M</span>arket
            </h3>
            <p className="text-sm text-[#EFE3C2]/70">
              Connecting clients with skilled freelancers for quick and reliable
              task completion.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#85A947]">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-[#EFE3C2]/80">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-[#85A947]" />
                <span>123 Freelance St, Workville, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#85A947]" />
                <span>support@freelancemarket.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#85A947]" />
                <span>+1 (234) 567-8900</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#85A947]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE3C2]/80">
              <li>
                <a
                  href="/terms"
                  className="hover:text-[#85A947] transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#85A947] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-[#85A947] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="hover:text-[#85A947] transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#85A947]">
              Stay Connected
            </h4>
            <p className="text-sm text-[#EFE3C2]/70 mb-4">
              Follow us on social media for updates and tips.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-[#3E7B27] hover:bg-[#85A947] p-2 rounded-full text-[#EFE3C2] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-[#3E7B27] hover:bg-[#85A947] p-2 rounded-full text-[#EFE3C2] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-[#3E7B27] hover:bg-[#85A947] p-2 rounded-full text-[#EFE3C2] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-[#3E7B27] hover:bg-[#85A947] p-2 rounded-full text-[#EFE3C2] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Optional: Newsletter */}
            <div className="mt-4">
              <p className="text-sm text-[#EFE3C2]/70 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 w-full bg-white/10 border border-[#3E7B27] rounded-l-md text-white placeholder-[#EFE3C2]/50 focus:outline-none"
                />
                <button className="bg-[#85A947] hover:bg-[#3E7B27] text-[#123524] px-3 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#3E7B27]/30 text-center text-sm text-[#EFE3C2]/60">
          &copy; {new Date().getFullYear()} Freelance Market. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
