// src/components/BookSearch.js
import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import './BookSearch.css';

const BookSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    const fetchTrendingBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/trending/now.json');
        const data = await response.json();
        setTrendingBooks(data.works || []);
      } catch (error) {
        console.error('Error fetching trending books:', error);
      }
    };

    fetchTrendingBooks();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim().length > 0) {
        setLoading(true);
        try {
          const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=10&page=1`);
          const data = await response.json();
          if (data && data.docs) {
            setResults(data.docs);
          } else {
            setResults([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    const timeoutId = setTimeout(fetchData, 500); // Add a delay to debounce user input
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="book-search">
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <SearchResults results={results} onAdd={onAdd} />
      ) : (
        <div>
          <h2>Trending Books</h2>
          <SearchResults results={trendingBooks} onAdd={onAdd} />
        </div>
      )}
    </div>
  );
};

export default BookSearch;
