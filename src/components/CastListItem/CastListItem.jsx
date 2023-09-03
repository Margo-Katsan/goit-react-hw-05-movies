import { HiUser } from "react-icons/hi";
import css from "./CastListItem.module.css"
export const CastListItem = ({ castData }) => {
  const { profile_path: url, name } = castData;
  return (
    <div>
      {url ? (
<img className={css.image} src={`https://image.tmdb.org/t/p/original${url}`} alt={`${name}`} width="100"/>
      ): (
          <div className={css.default}>
            <HiUser size={100} className={css.defaultImage} />
          </div>
      )}
      
      <h3>{`${name}`}</h3>
    </div>
  )
}