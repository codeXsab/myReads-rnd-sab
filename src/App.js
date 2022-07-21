import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BookShelfContainer } from "./components/BookShelfContainer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import * as BooksAPI from "./BooksAPI";

function App() {
  //Use-State Hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [value] = useDebounce(searchQuery, 500);
  //const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  //Helper Functions
  const mergeBooks = searchResult.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  const updateBookShelf = (book, newBookShelf) => {
    book.shelf = newBookShelf;
    const newBooks = books.filter((b) => b.id !== book.id);
    setBooks([...newBooks, book]);
    BooksAPI.update(book, newBookShelf);
  };

  // Use-Effect Hooks

  //Fetch Search Results
  useEffect(() => {
    try {
      if (value)
        BooksAPI.search(value).then((data) => {
          if (data.error) {
            setSearchResult([]);
            console.log(data);
          } else {
            setSearchResult(data);
          }
        });
    } catch (error) {
      console.log(error);
    }

    return () => setSearchResult([]);
  }, [value]);

  //Fetch Books
  useEffect(() => {
    try {
      BooksAPI.getAll().then((data) => {
        setBooks([...books, ...data]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(books);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/search">
            <SearchPage
              books={searchResult}
              updateBookShelf={updateBookShelf}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Route>
          <Route path="/">
            <div className="list-books">
              <Header />
              <div className="list-books-content">
                <div>
                  <BookShelfContainer
                    books={books}
                    updateBookShelf={updateBookShelf}
                  />
                </div>
              </div>
              <Link to="/search">
                <div className="open-search">
                  <div> Add a book </div>
                </div>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
