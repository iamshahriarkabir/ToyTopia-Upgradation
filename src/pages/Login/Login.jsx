import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  useTitle("Login");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Welcome back! Login successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google sign-in successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image/Banner */}
        <div className="hidden md:flex md:w-1/2 bg-teal-600 p-12 flex-col justify-between text-white relative overflow-hidden">
          <div className="relative z-10">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-teal-100 text-lg">
              Log in to manage your collection, wishlist toys, and get exclusive
              offers.
            </p>
          </div>
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-teal-500 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-500 opacity-30 blur-3xl"></div>

          <div className="relative z-10 mt-10">
            <img
              src="https://i.ibb.co.com/6cBnCdBF/balloon-twist-shaped-like-dragon-Edited.png"
              alt="Login Illustration"
              className="w-full h-auto drop-shadow-lg scale-x-[-1]"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center md:text-left mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
            <p className="text-gray-500 mt-2">
              Please enter your details to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full h-12 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control relative">
              <label className="label flex justify-between">
                <span className="label-text font-semibold text-gray-700">
                  Password
                </span>
                <Link
                  to="/forgot-password"
                  state={{ email }}
                  className="text-xs text-teal-600 hover:text-teal-800 font-semibold"
                >
                  Forgot Password?
                </Link>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full h-12 rounded-xl focus:border-teal-500 focus:outline-none bg-gray-50 pr-10"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-lg shadow-md hover:shadow-lg border-none transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="divider my-8 text-gray-400 text-sm">
            Or continue with
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full h-12 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center gap-3 transition-all"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Google
          </button>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-bold hover:underline"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
