import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((error) => toast.error(error.message));
  };

  // Custom NavLink Component
  const CustomLink = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative group w-18 sm:w-full font-bold text-base transition-colors duration-300 px-1 py-2
                hover:bg-transparent focus:bg-transparent active:bg-transparent bg-transparent
                ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-900 hover:text-teal-700"
                }`
        }
      >
        {({ isActive }) => (
          <>
            {children}
            {/* Animated Underline */}
            <span
              className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ease-out
                            ${
                              isActive
                                ? "w-full bg-orange-500"
                                : "w-0 bg-teal-700 group-hover:w-full"
                            }
                        `}
            ></span>
          </>
        )}
      </NavLink>
    );
  };

  const navLinks = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/all-toys">All Toys</CustomLink>
      </li>
      <li>
        <CustomLink to="/about">About</CustomLink>
      </li>
      <li>
        <CustomLink to="/contact">Contact</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/my-profile">Profile</CustomLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-60 bg-white/70 backdrop-blur-sm border-b border-gray-100/60 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-18 px-0">
          {/* Mobile Dropdown & Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden pl-0 text-gray-700 hover:bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-4 shadow-lg bg-white rounded-box w-52 text-gray-700 z-50 border border-gray-100 gap-2"
              >
                {/* Mobile Menu Links */}
                {navLinks}
              </ul>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight flex items-center gap-1 select-none"
            >
              <span className="text-teal-700">Toy</span>
              <span className="text-orange-500">Topia</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8 bg-transparent">
              {navLinks}
            </ul>
          </div>

          {/* Auth Section */}
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  className="tooltip tooltip-bottom tooltip-warning"
                  data-tip={user.displayName}
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar border border-teal-100 hover:border-teal-300 transition-colors hover:bg-transparent"
                  >
                    <div className="w-10 rounded-full ring ring-teal-50 ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          user.photoURL || "https://i.ibb.co/sd9jBbLp/user.png"
                        }
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-xl w-56 border border-gray-100 z-50"
                >
                  <li className="px-4 py-3 border-b border-gray-100 hover:bg-transparent cursor-default">
                    <span className="text-sm font-bold text-teal-800 block truncate">
                      {user.displayName}
                    </span>
                    <span className="text-xs text-gray-500 block truncate">
                      {user.email}
                    </span>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/my-profile"
                      className="hover:bg-teal-50 py-2 font-medium"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="text-red-500 hover:bg-red-50 py-2 font-medium"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-600 font-bold hover:text-orange-500 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
