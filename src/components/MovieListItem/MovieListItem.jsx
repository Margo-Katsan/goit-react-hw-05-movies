
import { RaitingStars } from "components/RaitingStars/RaitingStars";
import css from "./MovieListItem.module.css"

export const MovieListItem = ({ movieData, page }) => {
  const { title, poster_path: url, vote_average: raiting } = movieData;
  return (
    <>
      <img className={css.poster} src={`https://image.tmdb.org/t/p/original${url}`} alt={`${title} poster`} width="200"></img>
      <div className={css.info}>
        <h3 className={css.title}>{title}</h3>
        <RaitingStars raiting={raiting} />
      </div>
    </>
  )
}