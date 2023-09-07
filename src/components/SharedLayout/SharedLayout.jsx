import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loading } from "components/Loading/Loading";
import css from "./SharedLayout.module.css"

export const SharedLayout = () => {
  const { header, container, nav, link, main, mainWrapper } = css;
  
  return (
    <>
      <header className={header}>
        <div className={container}>
          <nav className={nav}>
            <NavLink to="/" className={link}>Home</NavLink>
            <NavLink to="/movies" className={link}>Movies</NavLink>
          </nav>
        </div>
      </header>
      <main className={main}>
        <div className={mainWrapper}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};