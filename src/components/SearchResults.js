// src/components/SearchResults.js
import React from 'react';
import BookCard from './BookCard';
import './SearchResults.css';

const SearchResults = ({ results, onAdd }) => {
  return (
    <div className="search-results">
      {results.length > 0 ? (
        <div className="results-grid">
          {results.map((book) => (
            <BookCard key={book.key} book={book} onAdd={onAdd} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
