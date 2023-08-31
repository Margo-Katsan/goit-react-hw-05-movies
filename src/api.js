import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '7564da9cb4db78373a8a5889a287f543';
const LANGUAGE = 'en-US';

export const fetchTrends = async page => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}&language=${LANGUAGE}&page=${page}`);
  return response.data;
}

export const fetchMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}&language=${LANGUAGE}`);
  return response.data
}

export const fetchMovieByQuery = async movieQuery => {
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${movieQuery}&include_adult=true&language=${LANGUAGE}&page=1`);
  return response.data;
}

export const fetchCastByMovieId = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}&language=${LANGUAGE}`);
  return response.data;
}

export const fetchReviewsByMovieId = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}&language=${LANGUAGE}&page=1`);
  return response.data;
}