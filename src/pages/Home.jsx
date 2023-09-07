import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Loading } from "components/Loading/Loading";
import { Caption } from "components/Caption/Caption";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Button } from "components/Button/Button";
import { fetchTrends } from "api" 

const Home = () => {
  const location = useLocation();
  const [trendsList, setTrendsList] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
   const [loading, setLoading] = useState(false);
  const [wasShowed, setWasShowed] = useState(false);

  useEffect(() => {
    async function fetchingTrends() {
      if (wasShowed) {
        return;
      } 
      try {
        setLoading(true);
        const fetchedTrends = await fetchTrends(page);
        setTrendsList(prevState => prevState.concat(fetchedTrends.results));
        console.log(fetchedTrends.results);
        setLoading(false);
        setLoadMoreBtn(true);
        setWasShowed(true);
      }
      catch (error) {
        toast.error('Oops! Something went wrong!', {
          position: "top-center",
          theme: "dark",
          hideProgressBar: true,
        });
      }
    }
    fetchingTrends();
  }, [page, loadMoreBtn, wasShowed]);

  const loadMore = () => {
    setWasShowed(false);
    setPage(prevState => prevState + 1);
  }

  return (
    <>
      <Caption />
      {loading && (
        <Loading />
      )}
      <MoviesList moviesList={trendsList} page={`${location.pathname}`} />
      {loadMoreBtn && (
        <Button onLoadMore={loadMore}/>
      )}
      <ToastContainer />
    </>
  )
};

export default Home;
