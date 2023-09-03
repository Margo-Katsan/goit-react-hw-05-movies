import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ReviewItem } from "components/ReviewItem/ReviewItem";
import { fetchReviewsByMovieId } from "api";
import css from "./Reviews.module.css"

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchingReviewsByMovieId() {
      const fetchedReviewsByMovieId = await fetchReviewsByMovieId(params.movieId);
      setReviews(fetchedReviewsByMovieId.results);
 
    }
    fetchingReviewsByMovieId();
  }, [params])
  return (
    <ul
      spaceBetween={50}
      slidesPerView={3}
      className={css.list}
    >
 
      {reviews.map(review => <li key={review.id} className={css.item}><ReviewItem reviewItem={review} /></li>)}

    </ul>
  )
}