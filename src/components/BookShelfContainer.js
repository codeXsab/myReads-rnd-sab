import React from 'react'
import { BookShelf } from './BookShelf';
export const BookShelfContainer = ({books}) => {

    const currentlyReading = books.filter((b) => b.bookshelf.toLowerCase().trim() === "currentlyreading");
    const wantToRead = books.filter((b) => b.bookshelf.toLowerCase().trim() === "wanttoread");
    const read = books.filter((b) => b.bookshelf.toLowerCase().trim() === "read");
    console.log(currentlyReading);
    console.log(wantToRead);
  return (
    <div>
    <BookShelf title= "Currently Reading" books={currentlyReading}/>
    <BookShelf title= "Want to Read" books={wantToRead}/>
    <BookShelf title= "Read" books={read}/>
    </div>
  )
}
