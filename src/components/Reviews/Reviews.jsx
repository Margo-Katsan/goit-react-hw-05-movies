import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ReviewItem } from "components/ReviewItem/ReviewItem";
import { fetchReviewsByMovieId } from "api";
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
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}

    >
 
      {reviews.map(review => <SwiperSlide><ReviewItem review={review} /></SwiperSlide>)}

    </Swiper>
  )
}