import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Loading } from "components/Loading/Loading";
import { CastListItem } from "components/CastListItem/CastListItem";
import { fetchCastByMovieId } from "api";
import css from "./CastList.module.css"

export const CastList = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchingCastByMovieId() {
      try {
        setLoading(true);
        const fetchedCastByMovieId = await fetchCastByMovieId(params.movieId);
        setCast(fetchedCastByMovieId.cast);
        setLoading(false);
      }
      catch (error) {
        
      }
      
    }
    fetchingCastByMovieId();
  }, [params])
  return (
    <>{loading && (
        <Loading />
      )}
    <ul className={css.list}>
      {cast.map(castItem => <li key={castItem.id} className={css.item}><CastListItem castData={castItem} /></li>)}
    </ul>
    </>
    
  )
}