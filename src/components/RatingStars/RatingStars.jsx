import Rating from '@mui/material/Rating';

import css from "./RatingStars.module.css";

export const RatingStars = ({ rating, votes }) => {
  return (
    <>
      <div className={css.container}>
      <Rating name="customized-10" defaultValue={rating} max={10} precision={0.1} readOnly/>
      <span className={css.number}>{rating.toFixed(1)}</span>
      </div>
      {votes && (
        <span className={css.votes}>({votes})</span>
      )}
    
    </>
    
  );
};