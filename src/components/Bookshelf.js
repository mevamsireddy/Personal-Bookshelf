// src/components/Bookshelf.js
import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './Bookshelf.css';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const removeFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter(b => b.key !== book.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h1>Books</h1>
      <div className="bookshelf">
        {bookshelf.length > 0 ? (
          bookshelf.map((book) => (
            <BookCard key={book.key} book={book} onRemove={removeFromBookshelf} />
          ))
        ) : (
          <p>No books in your bookshelf.</p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
