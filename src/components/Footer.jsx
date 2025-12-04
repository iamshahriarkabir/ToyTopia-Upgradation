import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGithub,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand Info */}
          <div className="space-y-6">
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-tight flex items-center gap-1"
            >
              <span className="text-white">Toy</span>
              <span className="text-orange-500">Topia</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the joy of play with our curated collection of safe,
              educational, and fun toys. Bringing smiles to kids' faces since
              2025.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <MapPin size={16} className="text-teal-500" />
                <span>123 Toy Street, Dhaka, BD</span>
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone size={16} className="text-teal-500" />
                <span>+880 1234 567 890</span>
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail size={16} className="text-teal-500" />
                <span>support@toytopia.com</span>
              </div>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/all-toys"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Customer Care
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-teal-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive deals and new arrivals.
            </p>

            <form
              className="flex flex-col gap-2 mb-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-500 text-sm"
              />
              <button className="bg-teal-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide">
                Subscribe
              </button>
            </form>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/zafor.skdr"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/iamshahriarkabir"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriar-kabir-z4"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@z4codelearner"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all text-gray-400"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-teal-500 font-bold">ToyTopia</span>. All
            Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Design & Developed by ❤️
            <span className="text-rose-500 font-semibold">Z4CODE</span>
          </p>
          {/* Payment Icons (Visual Only) */}
          <div className="flex gap-4 text-2xl text-gray-500">
            <FaCcVisa className="hover:text-white transition-colors" />
            <FaCcMastercard className="hover:text-white transition-colors" />
            <FaCcPaypal className="hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
