import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { MainMovieInfo } from "components/MainMovieInfo/MainMovieInfo";
import { Loading } from "components/Loading/Loading";
import { AdditionalMovieInfo } from "components/AdditionalMovieInfo/AdditionalMovieInfo";
import { fetchMovieById } from "api";

const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchingMovieById() {
      try {
        setLoading(true);
        const fetchedMovieById = await fetchMovieById(params.movieId);
        setImageURL(`https://image.tmdb.org/t/p/original${fetchedMovieById.poster_path}`);
        setImageAlt(`${fetchedMovieById.title} poster`);
        setTitle(`${fetchedMovieById.original_title}`);
        setOverview(`${fetchedMovieById.overview}`);
        setGenres(fetchedMovieById.genres);
        setLoading(false);
      }
      catch (error) {
        toast.error('Oops! Something went wrong!', {
          position: "top-center",
          theme: "dark",
          hideProgressBar: true,
        });
      }
      
    }
    fetchingMovieById();
  }, [params])

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <FaArrowAltCircleLeft size={40} color="#660000" style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "5px"}} />
      </Link>
      {loading && (
        <Loading />
      )}
      <MainMovieInfo imageURL={imageURL} imageAlt={imageAlt} title={title} overview={overview} genres={genres} />
      <AdditionalMovieInfo />
      <ToastContainer />
    </>
  );
}

export default MovieDetails;