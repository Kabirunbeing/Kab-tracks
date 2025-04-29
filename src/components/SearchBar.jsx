import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center mb-12 px-4">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search your tracks..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full py-3 px-5 text-lg text-blue-800 bg-white rounded-full border-2 border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-600 hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default SearchBar;
