import React, { useContext } from "react";
import { useLocation, Link } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { Mail, ArrowLeft, KeyRound } from "lucide-react";

const ForgotPassword = () => {
  useTitle("Forgot Password");
  const { resetPassword, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const initialEmail = location.state?.email || "";

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("Reset link sent! Please check your email inbox.");
        // Optional: Redirect to Gmail in a new tab
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Left Side: Visual */}
        <div className="md:w-1/2 bg-teal-700 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <Link
              to="/login"
              className="flex items-center gap-2 text-teal-200 hover:text-white transition-colors mb-8 w-fit"
            >
              <ArrowLeft size={20} /> Back to Login
            </Link>
            <h2 className="text-3xl font-extrabold mb-4">Password Recovery</h2>
            <p className="text-teal-100 text-lg leading-relaxed">
              Don't worry, it happens to the best of us. We'll help you get back
              to your account in no time.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex justify-center">
            <div className="bg-white/10 p-8 rounded-full backdrop-blur-md">
              <KeyRound size={80} className="text-orange-400" />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <div className="text-center md:text-left mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 mb-4 mx-auto md:mx-0">
              <Mail size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Reset your password
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleResetPassword} className="space-y-6">
            <div className="form-control space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  defaultValue={initialEmail}
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-700"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all border-none text-base"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-teal-600 font-bold hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
