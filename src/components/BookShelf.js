import React from 'react'
import { Book } from './Book';
export const BookShelf = ({ books , title }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((b) => {
                            return (
                                <li key={b.id}>
                                    <Book book={b}>
                                    </Book>
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        </div>
    );
};
