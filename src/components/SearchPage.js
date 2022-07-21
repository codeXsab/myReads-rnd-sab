import React from 'react'
import { BookShelf } from './BookShelf';

export const SearchPage = ({books, updateBookShelf, showSearchPage, setShowSearchpage ,searchQuery, setSearchQuery}) => {

  return (
    <div className="search-books">
          <div className="search-books-bar">
            <a
              href="#"
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchQuery}
                onChange={(event)=>{
                  setSearchQuery(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="search-books-results">
                
                <BookShelf books={books} title="Search Results" updateBookShelf={updateBookShelf}/>
          </div>
    </div>
  );
};
