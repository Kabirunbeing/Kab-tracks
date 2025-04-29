import React, { useEffect, useState } from "react";

const BooksSection = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Load from localStorage on first render
  useEffect(() => {
    const storedBooks = localStorage.getItem("kabeer-books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Save to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem("kabeer-books", JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;
    const newBook = { title, author, id: Date.now() };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  return (
    <section className="max-w-4xl mx-auto p-6 mt-20">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Books Tracker</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Book Title"
          className="px-4 py-2 border rounded-md w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="px-4 py-2 border rounded-md w-full"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          onClick={addBook}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {books.map((book) => (
          <li
            key={book.id}
            className="bg-white p-4 shadow-sm rounded-md border-l-4 border-blue-600"
          >
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BooksSection;
