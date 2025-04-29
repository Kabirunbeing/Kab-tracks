import React, { useState } from "react";

const ItemForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Book");
  const [creator, setCreator] = useState("");
  const [total, setTotal] = useState("");
  const [progress, setProgress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      category,
      creator,
      total,
      progress,
      startDate,
      notes,
    });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-lg">
        <h2 className="text-black text-3xl font-bold text-center mb-8">
          Add New Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              <option value="Book">Book</option>
              <option value="Movie">Movie</option>
              <option value="Game">Game</option>
              <option value="Music">Music</option>
              <option value="Course">Course</option>
              <option value="Article">Article</option>
            </select>
          </div>

          {/* Creator/Author Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Creator/Author
            </label>
            <input
              type="text"
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Enter creator/author"
            />
          </div>

          {/* Total (Pages/Episodes/Length) */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Total (Pages/Episodes/Length)
            </label>
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Total length"
            />
          </div>

          {/* Current Progress */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Current Progress
            </label>
            <input
              type="number"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Progress"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Enter any notes"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
