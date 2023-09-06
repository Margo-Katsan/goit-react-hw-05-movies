import { HiOutlineUserCircle } from "react-icons/hi";
import { RatingStars } from "components/RatingStars/RatingStars";
import css from "./ReviewItem.module.css";

export const ReviewItem = ({ reviewItem }) => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.userInfo}>
          {reviewItem.author_details.avatar_path ? (
            <img className={css.photo} src={`https://image.tmdb.org/t/p/original${reviewItem.author_details.avatar_path}`} alt="user" width={40} height={40}/>
          ): (
            <HiOutlineUserCircle size={50} className={css.user} />
          )}
          <h3 className={css.name}>{reviewItem.author}</h3>
        </div>
        {reviewItem.author_details.rating && (
          <RatingStars rating={reviewItem.author_details.rating} votes={null} />
        )}
      </div>
      <p className={css.review}>{reviewItem.content}</p>
    </>
  )
}