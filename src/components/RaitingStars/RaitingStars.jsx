import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";
import css from "./RaitingStars.module.css"

export const RaitingStars = ({ raiting }) => {
  const ratingRounding = () => {
    const raitingRounded = raiting.toFixed(1) - Number.parseInt(raiting);
    return raitingRounded;
  }

  const roundedRating = ratingRounding();
  const maxRating = 10; // Максимальный рейтинг (количество звёзд)

  return (
    <ul className={css.raitingList}>
      {
        Array.from({ length: maxRating }).map((_, index) => (
        <li key={index}>
          {index + 1 <= Math.floor(raiting) // Проверка для целых звёзд
              ? <TiStarFullOutline size={20} className={css.fullStar} />
            : index + 1 === Math.ceil(raiting) // Проверка для звезды с половиной
            ? roundedRating === 0.5
              ? <TiStarHalfOutline size={20} className={css.halfStar}/>
              : <TiStarOutline size={20} className={css.emptyStar}/>
            : <TiStarOutline size={20} className={css.emptyStar}/>}
        </li>
      ))}
    </ul>
  );
};