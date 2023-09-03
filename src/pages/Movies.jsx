import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Loading } from "components/Loading/Loading";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Button } from "components/Button/Button";
import { fetchMovieByQuery } from "api";

const Movies = (moviesId) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [moviesOnRequest, setMoviesOnRequest] = useState([]);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [wasSearch, setWasSearch] = useState(false);

  useEffect(() => {
    async function fetchingMovieByQuery() {
      if (!wasSearch) return;
      try {
        setLoading(true);
        const fetchedMovieByQuery = await fetchMovieByQuery(query, page);
        setMoviesOnRequest(prevState => prevState.concat(fetchedMovieByQuery.results));
        setLoading(false);
        setLoadMoreBtn(true);
      }
      catch(error) {

      }
      
    }
    fetchingMovieByQuery();
  }, [query, page, wasSearch]);

  const changeQuery = newQuery => {
    setSearchParams({ query: newQuery });
    setWasSearch(true);
    setPage(1);
    setMoviesOnRequest([]);
  }
  const loadMore = () => {

    setPage(prevState => prevState + 1);

  }
  
  return (
    <>
      <SearchBar onChangeQuery={changeQuery} />
      {loading && (
        <Loading />
      )}
      <MoviesList moviesList={moviesOnRequest} page={`${location.pathname}`} />
      {loadMoreBtn && (
        <Button onLoadMore={loadMore}/>
      )}
    </>
  )
}

export default Movies;