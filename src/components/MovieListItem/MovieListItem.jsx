import { FaImage } from "react-icons/fa";
import { RatingStars } from "components/RatingStars/RatingStars";
import css from "./MovieListItem.module.css"

export const MovieListItem = ({ movieData }) => {
  const { title, poster_path: imageUrl, vote_average: rating, vote_count: votes } = movieData;
  
  return (
    <>
      {imageUrl ? (
        <img className={css.poster} src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} width={200} alt="poster"/>
      ) : (
        <div className={css.default}>
          <FaImage size={150} className={css.defaultImage} />
        </div>
      )}
      <div className={css.info}>
        <h3 className={css.title}>{title}</h3>
        <RatingStars rating={rating} votes={votes} />
      </div>
    </>
  )
}