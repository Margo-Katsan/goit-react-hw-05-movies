import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css"

export const SharedLayout = () => {
  const { header, container, nav, link, main, section} = css;
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
        <section className={section}>
          <Outlet />
        </section>
      </main>
    </>
  );
};