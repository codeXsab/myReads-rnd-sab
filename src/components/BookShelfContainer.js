import React from 'react'
import { BookShelf } from './BookShelf';
export const BookShelfContainer = ({books , updateBookShelf}) => {

  const currentlyReading = books.filter((b) => b.shelf.toLowerCase().trim() === "currentlyreading");
  const wantToRead = books.filter((b) => b.shelf.toLowerCase().trim() === "wanttoread");
  const read = books.filter((b) => b.shelf.toLowerCase().trim() === "read");
  return (
    <div>
    <BookShelf title= "Currently Reading" books={currentlyReading} updateBookShelf={updateBookShelf}/>
    <BookShelf title="Want to Read" books={wantToRead} updateBookShelf={updateBookShelf}/>
    <BookShelf title="Read" books={read} updateBookShelf={updateBookShelf}/>
    </div>
  )
}
