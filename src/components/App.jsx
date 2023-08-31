import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MovieDetails";
import { CastList } from "./CastList/CastList";
import { Reviews } from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import css from "./App.module.css"

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<CastList />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route> 
      </Routes>
    </div>
  );
};
