import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  useTitle("Register");
  const { createUser, setUserInfo, signInWithGoogle, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password))
      return toast.error("Need at least one uppercase letter.");
    if (!/(?=.*[a-z])/.test(password))
      return toast.error("Need at least one lowercase letter.");

    createUser(email, password)
      .then(() => {
        setUserInfo(name, photoURL)
          .then(() => {
            toast.success("Account created successfully! 🎉");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google sign-in successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
        {/* Right Side - Image/Banner */}
        <div className="hidden md:flex md:w-1/2 bg-orange-500 p-12 flex-col justify-between text-white relative overflow-hidden">
          <div className="relative z-10">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <h2 className="text-4xl font-bold mb-4">Join the Fun!</h2>
            <p className="text-white/80 text-lg">
              Create an account to explore thousands of toys and join our happy
              community.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-20 blur-3xl"></div>

          <div className="relative z-10 mt-10">
            <img
              src="https://i.ibb.co.com/6cBnCdBF/balloon-twist-shaped-like-dragon-Edited.png"
              alt="Register Illustration"
              className="w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-2">It's quick and easy.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full h-11 rounded-xl focus:border-yellow-400 focus:outline-none bg-gray-50"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input input-bordered w-full h-11 rounded-xl focus:border-yellow-400 focus:outline-none bg-gray-50"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="https://..."
                className="input input-bordered w-full h-11 rounded-xl focus:border-yellow-400 focus:outline-none bg-gray-50"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full h-11 rounded-xl focus:border-yellow-400 focus:outline-none bg-gray-50 pr-10"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-lg shadow-md border-none mt-2"
            >
              Sign Up
            </button>
          </form>

          <div className="divider my-6 text-gray-400 text-sm">
            Or sign up with
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full h-11 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50 gap-3"
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

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
