import React from "react";
import BooksSection from "./BooksSection";

const Sections = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-10 border border-white/10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-snug">
            <span className="text-cyan-400">Your</span>{" "}
            <span className="relative inline-block text-white">
              Activity Tracker
              <span className="block h-[3px] w-4/5 mx-auto bg-cyan-500 mt-2 rounded-full animate-pulse shadow-md shadow-cyan-500/40" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Built by <span className="text-cyan-400 font-semibold">Kabeer</span> to track every chore and habit — from reading books to watching movies.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid gap-16">
          <BooksSection />
          {/* <MoviesSection /> */}
          {/* <ChoresSection /> */}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600 rounded-full blur-2xl opacity-20" />
    </section>
  );
};

export default Sections;
