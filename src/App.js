// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    if (!bookshelf.find(b => b.key === book.key)) {
      const updatedBookshelf = [...bookshelf, book];
      setBookshelf(updatedBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    }
  };

  return (
    <Router>
      <header>
        <Link to="/">
          <h1>Bookshelf</h1>
        </Link>
        <nav>
          <Link to="/bookshelf">My Shelf</Link>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookSearch onAdd={addToBookshelf} />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
