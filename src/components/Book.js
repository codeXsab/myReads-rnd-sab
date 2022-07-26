import React from "react";

export const Book = ({ book, updateBookShelf }) => {
  console.log(book);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf ? book.shelf : "none"}
            onChange={(event) => updateBookShelf(book, event.target.value)}
          >
            <option value="dis" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
    </div>
  );
};
