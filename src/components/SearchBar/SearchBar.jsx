import { GiFilmProjector } from "react-icons/gi";
import css from "./SearchBar.module.css"

export const SearchBar = ({onChangeQuery}) => {
  return (
    <div className={css.searchbar}>
      <form className={css.form} onSubmit={event => {
        event.preventDefault();
        onChangeQuery(event.target.elements.query.value);
        event.target.reset();
      }}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={css.button}>
          <GiFilmProjector className={css.icon} size={30} color="#660000"/>
        </button>
      </form>
    </div>
  )
}