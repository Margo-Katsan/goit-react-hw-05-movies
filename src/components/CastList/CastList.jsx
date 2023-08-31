import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CastListItem } from "components/CastListItem/CastListItem";
import { fetchCastByMovieId } from "api";

export const CastList = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);


  

  useEffect(() => {
    async function fetchingCastByMovieId() {
      const fetchedCastByMovieId = await fetchCastByMovieId(params.movieId);
      setCast(fetchedCastByMovieId.cast);
 

      console.log();

    }
    fetchingCastByMovieId();
  }, [params])
  return (
    <ul>
      {cast.map(castItem => <li key={castItem.id}><CastListItem castData={castItem} /></li>)}
    </ul>
  )
}