import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loading } from "components/Loading/Loading";
import css from "./AdditionalMovieInfo.module.css"

export const AdditionalMovieInfo = () => {
  const { container, list, listItem, link } = css;
  return (
    <div className={container}>
      <ul className={list}>
        <li className={listItem}>
          <NavLink className={link} to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink className={link} to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
    </div>
  )
}