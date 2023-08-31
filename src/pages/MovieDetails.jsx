import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainMovieInfo } from "components/MainMovieInfo/MainMovieInfo";
import { AdditionalMovieInfo } from "components/AdditionalMovieInfo/AdditionalMovieInfo";
import { fetchMovieById } from "api";

const MovieDetails = () => {
  const params = useParams();

  const [imageURL, setImageURL] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchingMovieById() {
      const fetchedMovieById = await fetchMovieById(params.movieId);
      setImageURL(`https://image.tmdb.org/t/p/original${fetchedMovieById.poster_path}`);
      setImageAlt(`${fetchedMovieById.title} poster`);
      setTitle(`${fetchedMovieById.original_title}`);
      setOverview(`${fetchedMovieById.overview}`);
      setGenres(fetchedMovieById.genres);
    }
    fetchingMovieById();
  }, [params])

  return (
    <>
      <MainMovieInfo imageURL={imageURL} imageAlt={imageAlt} title={title} overview={overview} genres={genres} />
      <AdditionalMovieInfo />
    </>
  );
}

export default MovieDetails;