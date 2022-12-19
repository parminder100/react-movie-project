import './App.css';
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies';
// import SearchedMovie from './components/searchmovie/SearchedMovie';
import SearchMovie from './components/searchmovie/SearchMovie';
import Pages from "./components/Routes/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <SearchMovie />
        <UpcomingMovies />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
