// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAdd, onRemove }) => {
  const imageUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/128x193?text=No+Image';

  return (
    <div className="book-card">
      <img src={imageUrl} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        <p>{book.first_publish_year ? `First published: ${book.first_publish_year}` : ''}</p>
      </div>
      <div className="book-actions">
        {onAdd && <button onClick={() => onAdd(book)}>Add to Bookshelf</button>}
        {onRemove && <button onClick={() => onRemove(book)}>Remove from Bookshelf</button>}
      </div>
    </div>
  );
};

export default BookCard;
