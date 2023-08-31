
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MoviesList } from "components/MoviesList/MoviesList";
import { fetchMovieByQuery } from "api";


const Movies = (moviesId) => {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const [moviesOnRequest, setMoviesOnRequest] = useState([]);
  useEffect(() => {
    async function fetchingMovieByQuery() {
      const fetchedMovieByQuery = await fetchMovieByQuery(query);
      setMoviesOnRequest(fetchedMovieByQuery.results);
    }
    fetchingMovieByQuery();
  }, [query]);
  const changeQuery = newQuery => {
    setQuery(newQuery);
  }
  return (
    <>
      <SearchBar onChangeQuery={changeQuery} />
      <MoviesList moviesList={moviesOnRequest} page={`${location.pathname}`} />
    </>
  )
}
export default Movies;