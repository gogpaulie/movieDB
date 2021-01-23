import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5d7ce722259d9a0eedf605443e5cc999&page=1`;

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=5d7ce722259d9a0eedf605443e5cc999&query="`;

  function searchMovies(searchTerm) {
    getMovies(SEARCH_API + searchTerm);
  }

  useEffect(() => {
    getMovies(API_URL);
  }, [API_URL]);

  async function getMovies(url) {
    setMovies([]);
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  return (
    <div>
      <Header searchMovies={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
