import "./App.css";
import { useState , useEffect } from "react";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { BookShelfContainer } from "./components/BookShelfContainer";
import * as BooksAPI from './BooksAPI'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books,setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const updateBookShelf = (book, newBookShelf)=> {
    book.shelf = newBookShelf;
    const newBooks = books.filter((b)=> b.id !== book.id);
    setBooks([...newBooks, book]);
    BooksAPI.update(book,newBookShelf);
  }
  useEffect(()=>{
    try{
      if(searchQuery)
        BooksAPI.search(searchQuery).then((data)=>{
          if(data.error)
          {
            setSearchResult([]);
            console.log(data);
          }
          else
            { 
              setSearchResult(data);
            }
        });
    }
    catch(error)
    {   
        console.log(error);
    }

    return(()=> setSearchResult([]));

  },[searchQuery])
  useEffect(()=>{
      try {
        BooksAPI.getAll().then((data) => {
          setBooks([...books, ...data]);
        });
      } catch (error) {
        console.log(error);
      }
  },[]);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage 
        books = {searchResult}
        updateBookShelf = {updateBookShelf}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        showSearchPage={showSearchPage} 
        setShowSearchpage={setShowSearchpage}/>
      ) : ( 
        <div className="list-books">
          <Header/>
          <div className="list-books-content">
            <div>
              <BookShelfContainer books={books} updateBookShelf={updateBookShelf}/>
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
