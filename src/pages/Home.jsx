
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Caption } from "components/Caption/Caption";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Button } from "components/Button/Button";
import { fetchTrends } from "api" 

const Home = () => {
  const location = useLocation();
  const [trendsList, setTrendsList] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [wasShowed, setWasShowed] = useState(false);

  useEffect(() => {
    async function fetchingTrends() {
      console.log("bulo");
      if (wasShowed) {
        return;
      } 
      try {
        const fetchedTrends = await fetchTrends(page);
        setTrendsList(prevState => prevState.concat(fetchedTrends.results));
        setLoadMoreBtn(true);
        setWasShowed(true);
      }
      catch (error) {
        
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
      <MoviesList moviesList={trendsList} page={`${location.pathname}`} />
      {loadMoreBtn && (
        <Button onLoadMore={loadMore}/>
      )}
    </>
  )
};

export default Home;
