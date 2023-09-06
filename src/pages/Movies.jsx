import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from "components/SearchBar/SearchBar";
import { Loading } from "components/Loading/Loading";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Button } from "components/Button/Button";
import { fetchMovieByQuery } from "api";

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page' ?? 1);
  const [moviesOnRequest, setMoviesOnRequest] = useState([]);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [loading, setLoading] = useState(false);
 
  


  useEffect(() => {
    async function fetchingMovieByQuery() {
      if (query === '') {
        return;
      }
      try {
        setLoading(true);
        const fetchedMovieByQuery = await fetchMovieByQuery(query, page);
        setMoviesOnRequest(prevState => prevState.concat(fetchedMovieByQuery.results));
        setLoading(false);
        setLoadMoreBtn(true);
   
        if (fetchedMovieByQuery.total_results === 0) {

          toast.warn("Sorry, there are no images matching your search query. Please try again.", {
            position: "top-center",
            theme: "dark",
            hideProgressBar: true,
          })
        }
        if (fetchedMovieByQuery.results.length === fetchedMovieByQuery.total_results ||
        fetchedMovieByQuery.total_results === 0) {
          setLoadMoreBtn(false);
        }
      }
      catch(error) {
        toast.error('Oops! Something went wrong!');
      }
      
    }
    fetchingMovieByQuery();
  }, [query, page]);

  const changeQuery = newQuery => {
    if (newQuery === "") {
      toast.warn("You didn't enter anything into the search engine", {
            position: "top-center",
            theme: "dark",
            hideProgressBar: true,
          });
      setSearchParams({});
      setLoadMoreBtn(false);
    }
    else {
      setSearchParams({ query: newQuery, page: 1 });
    }
    
 
    setMoviesOnRequest([]);
  }
  const loadMore = () => {

    setSearchParams({query, page: parseInt(page)+1});

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
      <ToastContainer />
    </>
  )
}

export default Movies;