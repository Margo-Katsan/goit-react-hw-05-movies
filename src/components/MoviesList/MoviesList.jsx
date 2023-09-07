import { NavLink, useLocation } from "react-router-dom";
import { MovieListItem } from "components/MovieListItem/MovieListItem";
import css from "./MoviesList.module.css"

export const MoviesList = ({ moviesList, page }) => {
  const location = useLocation();
  
  return (
    <div className={css.container}>
      <ul className={css.list}>
      {moviesList.map(movieItem =>
        <li className={css.listItem} key={movieItem.id}>
          {page ==="/movies" && (
            <NavLink className={css.link} to={`${movieItem.id}`} state = {{from: location}}>
              <MovieListItem movieData={movieItem}/>
            </NavLink>
          )}
          {page === "/" && (
            <NavLink className={css.link} to={`/movies/${movieItem.id}`} state = {{from: location}}>
              <MovieListItem movieData={movieItem}/>
            </NavLink>
          )}
        </li>)}
    </ul>
    </div>
    
  )
}