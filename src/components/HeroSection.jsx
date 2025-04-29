import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <section
      className={`relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white ${scrolled ? "bg-white/90 shadow-lg" : "bg-gradient-to-r from-blue-600 to-blue-400"} transition-all duration-300`}
      style={{
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?productivity,books,movies,tracking")',
      }}
    >
      {/* Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Hero Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 leading-tight mb-6">
          Kabeer Tracks Everything You Do, From Books to Movies and Beyond
        </h1>

        {/* Hero Description */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light text-gray-200">
          Whether it's reading books, watching movies, or any other activity, Kabeer tracks his progress and stays organized with ease. Join in and make your every action count!
        </p>

        {/* CTA Button */}
        <a
          href="#get-started"
          className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
