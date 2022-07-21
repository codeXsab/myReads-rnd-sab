import React from "react";
import { BookShelf } from "./BookShelf";
import { Link } from "react-router-dom";
export const SearchPage = ({
  books,
  updateBookShelf,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <div className="close-search">
          </div>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookShelf
          books={books}
          title="Search Results"
          updateBookShelf={updateBookShelf}
        />
      </div>
    </div>
  );
};
