import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/95 backdrop-blur-sm py-12 mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0">
          {/* Branding or Developer Info */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            <span className="text-blue-600">Track</span>
            <span className="text-gray-800">It</span>
          </div>

          {/* Developer Info */}
          <div className="text-center sm:text-left text-gray-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg">
            <p>&copy; {new Date().getFullYear()} Kabeer. All rights reserved.</p>
            <p className="mt-2 text-gray-600">
              Developed by{" "}
              <span className="text-blue-600 font-semibold">Kabeer</span>
              <br />
              <span className="text-blue-600">TrackIt</span> - Activity Tracker App
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 text-center sm:text-left text-gray-500 text-xs sm:text-sm lg:text-base">
          <p>
            App designed and developed by{" "}
            <span className="text-blue-600 font-semibold">Kabeer</span>.
          </p>
          <p className="mt-2">
            All rights reserved. TrackIt is a personal project aimed at improving productivity tracking.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
