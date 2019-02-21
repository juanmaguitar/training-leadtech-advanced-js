import axios from 'axios'

import {
  GET_POPULAR_MOVIES_IS_LOADING,
  GET_POPULAR_MOVIES_HAS_ERROR, 
  GET_POPULAR_MOVIES_SUCCESS 
} from '../constants/action-types'

import {
  URL_POPULAR_MOVIES
} from '../constants/urls'

export function getPopularMoviesHasErrored(hasError) {
  return {
      type: GET_POPULAR_MOVIES_HAS_ERROR,
      hasError
  };
}

export function getPopularMoviesIsLoading(isLoading) {
  return {
      type: GET_POPULAR_MOVIES_IS_LOADING,
      isLoading
  };
}

export function getPopularMoviesSuccess(movies) {
  return {
      type: GET_POPULAR_MOVIES_SUCCESS,
      movies
  };
}

export function getPopularMovies() {
    return (dispatch) => {
        dispatch(getPopularMoviesIsLoading(true));

        axios.get(URL_POPULAR_MOVIES)
            .then((response) => {
                dispatch(getPopularMoviesIsLoading(false));
                return response;
            })
            .then(({data}) => data)
            .then(({ results }) => dispatch(getPopularMoviesSuccess(results)))
            .catch(() => dispatch(getPopularMoviesHasErrored(true)));
    };
}