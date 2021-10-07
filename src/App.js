import './App.css';
import BookList from './components/BookList/BookList';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <>
      <div className="Container">
        <div className="Search-section">
          <h1>Search for Books</h1>
          <SearchForm/>
        </div>
      </div>
      <BookList/>
    </>
  );
}

export default App;
