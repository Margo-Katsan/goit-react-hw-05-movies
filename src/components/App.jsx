import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import css from "./App.module.css";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'))
const MoviesDetails = lazy(() => import('pages/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound'));
const CastList = lazy(() => import('./CastList/CastList'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </div>
  );
};
