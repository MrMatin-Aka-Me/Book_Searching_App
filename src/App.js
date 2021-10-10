import './App.css';
import BookList from './components/BookList/BookList';
import SearchForm from './components/SearchForm/SearchForm';
import ViewMore from './components/ViewMore/ViewMore';
import { shallowEqual, useSelector} from 'react-redux';
import BookFullInfo from './components/BookFullInfo/BookFullInfo';


function App() {
  const bookFullInfo = useSelector((state) => state.bookFullInfo, shallowEqual);

  return (
    <>
      <div className="Container">
        <div className="Search-section">
          <h1>Search for Books</h1>
          <SearchForm />
        </div>
      </div>
      {bookFullInfo.opened
        ? 
        <BookFullInfo/> 
        : 
        <div>
          <BookList />
          <div className="ViewMoreDiv"><ViewMore /></div>
        </div>}
    </>
  );
}

export default App;
