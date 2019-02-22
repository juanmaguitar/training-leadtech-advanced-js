import { get } from "axios";
import { API_URL } from "../constants/";
import { API_KEY } from "./credentials";

const getURL = path => `${API_URL}/3${path}?api_key=${API_KEY}`;

const getData = async (path, params = "") => {
  const requestURL = getURL(path) + params;
  console.log(requestURL);
  const { data } = await get(requestURL);
  return data;
};

export const getCategoryMovies = async ({ category: query, page = 1 }) => {
  console.log(query, page)
  const response = await getData(`/movie/${query}`, `&page=${page}`);
  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults
  } = response;
  return { query, page, movies, totalPages, totalResults };
};

export const getMovieData = async ({id}) => {
  console.log('hola')
  const response = await getData(`/movie/${id}`);
  return response
};

export const getUrlMovieImages = (path, size = "medium") => {
  return `http://image.tmdb.org/t/p/${getSizeCode(size)}/${path}`;
};

export const getSearchMovie = async ({ query, page = 1 }) => {
  console.log('hola')
  console.log(query, page)
  const response = await getData(`/search/movie`, `&query=${query}&page=${page}`);
  console.log(response)
  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults
  } = response;
  return { query, page, movies, totalPages, totalResults };
};

const getSizeCode = size => {
  switch (size) {
    case "small":
      return "w185";
    case "medium":
      return "w342";
    case "large":
      return "w500";
    case "xlarge":
      return "w780";
    case "original":
      return "original";
    default:
      return "w500";
  }
};
