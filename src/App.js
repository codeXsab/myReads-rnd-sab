import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import {initialBooks} from "./Data";
import { BookShelfContainer } from "./components/BookShelfContainer";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books,setBooks] = useState(initialBooks);
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
      ) : ( 
        <div className="list-books">
          <Header/>
          <div className="list-books-content">
            <div>
              <BookShelfContainer books={books}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
