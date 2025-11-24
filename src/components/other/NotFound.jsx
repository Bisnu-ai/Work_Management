import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0f0f0f] text-white">

      <h1 className="text-8xl font-bold text-red-500 drop-shadow-lg">404</h1>

      <h2 className="text-2xl mt-4 font-semibold">Page Not Found</h2>

      <p className="text-gray-400 mt-2 text-center px-4">
        The page you are looking for does not exist or might have been moved.
      </p>

      <a
        href="/"
        className="mt-6 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
      >
        Go Back Home
      </a>

    </div>
  );
};

export default NotFound;
