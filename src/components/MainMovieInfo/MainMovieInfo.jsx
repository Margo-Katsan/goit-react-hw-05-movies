import css from "./MainMovieInfo.module.css"

export const MainMovieInfo = ({ imageURL, imageAlt, title, overview, genres }) => {
  const { container, poster, info, name, desc, genresTitle, genresList, genreItem } = css;
  return (
    <div className={container}>
      <img src={imageURL} alt={imageAlt} width="300" className={poster} />
      <div className={info}>
        <h2 className={name}>{title}</h2>
        <h3 className={desc}>Overview</h3>
        <p className={genres}>{overview}</p>
        <h3 className={genresTitle}>Genres</h3>
        <ul className={genresList}>
          {genres.map(genre => <li key={genre.id} className={genreItem}><p>{genre.name}</p></li>)}
        </ul>
      </div>
    </div>
  )
}