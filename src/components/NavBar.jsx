import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm py-2" : "bg-white/95 backdrop-blur-sm py-3"}`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            <span className="text-blue-600">Track</span>
            <span className="text-gray-800">It</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-xs sm:text-sm md:text-base lg:text-lg"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-xs sm:text-sm md:text-base lg:text-lg"
            >
              Features
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-xs sm:text-sm md:text-base lg:text-lg"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-xs sm:text-sm md:text-base lg:text-lg"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="ml-4 px-4 py-1.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm md:text-base lg:text-lg shadow-sm hover:shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Animated and positioned on the right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ paddingTop: "4rem" }} // Adjusted to match navbar height
      >
        <div className="flex flex-col space-y-4 px-6 py-6">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b border-gray-100 text-xs sm:text-sm md:text-base lg:text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b border-gray-100 text-xs sm:text-sm md:text-base lg:text-lg"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b border-gray-100 text-xs sm:text-sm md:text-base lg:text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b border-gray-100 text-xs sm:text-sm md:text-base lg:text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm md:text-base lg:text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
