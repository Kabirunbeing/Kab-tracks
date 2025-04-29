import React, { useState, useEffect } from "react";
import BooksSection from "./BooksSection";
// import MoviesSection from "./MoviesSection";
// import ChoresSection from "./ChoresSection";

const Sections = () => {
  const [activeSections, setActiveSections] = useState({
    books: true,
    movies: false,
    chores: false,
  });
  const [showModal, setShowModal] = useState(false);

  const toggleSection = (section) => {
    const activeCount = Object.values(activeSections).filter(Boolean).length;
    const isAlreadyActive = activeSections[section];

    if (!isAlreadyActive && activeCount >= 1) {
      setShowModal(true);
      return;
    }

    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section className="relative py-24 px-6 bg-white min-h-screen overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug">
            <span className="text-cyan-600">Your</span>{" "}
            <span className="relative inline-block text-gray-900">
              Activity Tracker
              <span className="block h-[3px] w-4/5 mx-auto bg-cyan-500 mt-2 rounded-full" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Built by{" "}
            <span className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-500 transition">
              Kabeer
            </span>{" "}
            to track every chore and habit — from reading books to watching movies.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { id: "books", label: "Books" },
            { id: "movies", label: "Movies" },
            { id: "chores", label: "Chores" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => toggleSection(id)}
              className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-300
                ${
                  activeSections[id]
                    ? "bg-cyan-100 text-cyan-700 border-cyan-500 underline underline-offset-4"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-400"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="grid gap-16 transition duration-300 ease-in-out">
          {activeSections.books && <BooksSection />}
          {/* {activeSections.movies && <MoviesSection />} */}
          {/* {activeSections.chores && <ChoresSection />} */}
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-300 rounded-full blur-2xl opacity-10 pointer-events-none" />

      {/* Tiny Modal */}
      {showModal && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-cyan-100 border border-cyan-300 text-cyan-800 px-4 py-2 rounded-xl shadow-lg text-sm animate-fade-in-out z-50">
Only one category can be active at a time. Please close the current one before opening another.        </div>
      )}
    </section>
  );
};

export default Sections;
