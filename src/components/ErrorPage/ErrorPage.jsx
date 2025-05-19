import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center">
        <div className="mx-auto w-80 mb-6 animate-bounce">
          <img
            src="https://i.postimg.cc/zfzB3bsc/404.png"
            alt="404 Illustration"
            className="w-full shadow-xl rounded-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mt-6">
          Looks Like You're Lost!
        </h1>
        <p className="text-xl text-gray-700 mt-2">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
