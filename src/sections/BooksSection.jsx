import React, { useEffect, useState } from "react";

const BooksSection = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("reading");
  const [startDate, setStartDate] = useState("");
  const [readingDuration, setReadingDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("hours");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("fiction");
  const [rating, setRating] = useState(1);
  const [tags, setTags] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const storedBooks = localStorage.getItem("kabeer-books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kabeer-books", JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;
    const newBook = {
      title,
      author,
      status,
      startDate,
      readingDuration: `${readingDuration} ${durationUnit}`,
      notes,
      category,
      rating,
      tags,
      endDate,
      id: Date.now(),
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setStatus("reading");
    setStartDate("");
    setReadingDuration("");
    setNotes("");
    setCategory("fiction");
    setRating(1);
    setDurationUnit("hours");
    setTags("");
    setEndDate("");
  };

  return (
    <section className="max-w-6xl mx-auto p-10 mt-20 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-10 underline underline-offset-4 decoration-blue-400">
        Books Tracker
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <input
          type="text"
          placeholder="Book Title"
          className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <input
          type="date"
          className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reading Duration"
          className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
          value={readingDuration}
          onChange={(e) => setReadingDuration(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
        >
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
          <option value="onHold">On Hold</option>
        </select>
        <select
          value={durationUnit}
          onChange={(e) => setDurationUnit(e.target.value)}
          className="px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
        >
          <option value="hours">Hours</option>
          <option value="minutes">Minutes</option>
          <option value="days">Days</option>
        </select>
      </div>

      <div className="mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
        >
          <option value="fiction">Fiction</option>
          <option value="nonFiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="biography">Biography</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      <div className="mb-6">
        <select
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-800"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{`${star} Star${star > 1 ? "s" : ""}`}</option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-800 mb-6"
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-800 mb-6"
      />

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
        className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-800 mb-8"
      />

      <button
        onClick={addBook}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
      >
        Add Book
      </button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold text-blue-700 hover:underline underline-offset-4">
              {book.title}
            </h3>
            <p className="text-blue-500 font-medium mb-2 hover:underline">{book.author}</p>
            <p className="text-gray-600"><strong>Status:</strong> {book.status}</p>
            <p className="text-gray-600"><strong>Started:</strong> {book.startDate}</p>
            <p className="text-gray-600"><strong>Duration:</strong> {book.readingDuration}</p>
            <p className="text-gray-600"><strong>Category:</strong> {book.category}</p>
            <p className="text-gray-600"><strong>Rating:</strong> {book.rating} Stars</p>
            <p className="text-gray-600"><strong>Tags:</strong> {book.tags}</p>
            <p className="text-gray-600"><strong>End Date:</strong> {book.endDate}</p>
            <p className="text-gray-600 mt-2"><strong>Notes:</strong> {book.notes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
