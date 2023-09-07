import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { ReviewItem } from "components/ReviewItem/ReviewItem";
import { fetchReviewsByMovieId } from "api";
import css from "./Reviews.module.css"

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    async function fetchingReviewsByMovieId() {
      try {
        const fetchedReviewsByMovieId = await fetchReviewsByMovieId(params.movieId);
        setReviews(fetchedReviewsByMovieId.results);
      }
      catch (error) {
        toast.error('Oops! Something went wrong!', {
          position: "top-center",
          theme: "dark",
          hideProgressBar: true,
        });
      }
    }
    fetchingReviewsByMovieId();
  }, [params])

  return (
    <>
      <ul className={css.list}>
        {reviews.map(review => <li key={review.id} className={css.item}><ReviewItem reviewItem={review} /></li>)}
      </ul>
      {reviews.length === 0 && (
        <p className={css.noReviews}>We don't have any reviews for this movie</p>
      )}
      <ToastContainer />
    </>
  )
}

export default Reviews;