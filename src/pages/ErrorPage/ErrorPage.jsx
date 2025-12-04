import React from "react";
import { Link, useRouteError } from "react-router";
import useTitle from "../../hooks/useTitle";
import { Home } from "lucide-react";

const ErrorPage = () => {
  useTitle("Page Not Found");
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Custom Illustration or Professional Gif */}
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Illustration"
          className="w-full h-64 object-contain mx-auto mb-8 rounded-xl mix-blend-multiply"
        />

        <h1 className="text-6xl font-extrabold text-teal-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for might have been removed or is temporarily unavailable."}
        </p>

        <Link
          to="/"
          className="btn bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg shadow-lg border-none flex items-center gap-2 mx-auto w-fit"
        >
          <Home size={20} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
