import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { MainMovieInfo } from "components/MainMovieInfo/MainMovieInfo";
import { AdditionalMovieInfo } from "components/AdditionalMovieInfo/AdditionalMovieInfo";
import { fetchMovieById } from "api";

const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
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
      <Link to={backLinkLocationRef.current}>
        <FaArrowAltCircleLeft size={40} color="#660000" style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "5px"}} />
      </Link>
      <MainMovieInfo imageURL={imageURL} imageAlt={imageAlt} title={title} overview={overview} genres={genres} />
      <AdditionalMovieInfo />
    </>
  );
}

export default MovieDetails;