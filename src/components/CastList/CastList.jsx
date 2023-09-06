import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CastListItem } from "components/CastListItem/CastListItem";
import { fetchCastByMovieId } from "api";
import css from "./CastList.module.css"

const CastList = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);


  useEffect(() => {
    async function fetchingCastByMovieId() {
      try {
        
        const fetchedCastByMovieId = await fetchCastByMovieId(params.movieId);
        setCast(fetchedCastByMovieId.cast);
        
      }
      catch (error) {
        toast.error('Oops! Something went wrong!')
      }
    }
    fetchingCastByMovieId();
  }, [params])

  return (
    <>
 
      <ul className={css.list}>
        {cast.map(castItem => <li key={castItem.id} className={css.item}><CastListItem castData={castItem} /></li>)}
      </ul>
      <ToastContainer />
    </>
  )
}

export default CastList;