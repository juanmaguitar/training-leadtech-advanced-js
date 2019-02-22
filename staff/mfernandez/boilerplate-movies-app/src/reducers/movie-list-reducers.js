import {REQUEST_MOVIE_LIST_ACTIONS, MOVIE_LIST_UPDATE_PAGE } from '../constants/actions-type'

const initialMovieListDataState = {
  movieLists: [],
  actualQuery: '',
  actualPage: 0,
  fetching: false,
  status: '',
  error: ''
}
// movieLists: {
//   query: '',
//   movies: [],
//   page: 1,
//   totalPages: 0,
//   totalResults: 0,
// }
export const reducersMovieList = ( movieListDataState = initialMovieListDataState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_LIST_ACTIONS.FETCHING:
      console.log('hasta aqui')
      return {...movieListDataState, fetching: true, status: 'fetching', error: ''}
    case REQUEST_MOVIE_LIST_ACTIONS.SUCCESS:
      const {movieLists} = movieListDataState
      const movieList = action.payload
      return {...movieListDataState, fetching: false, status: 'success',
        movieLists: [...movieLists, movieList],
        actualQuery: movieList.query,
        actualPage: movieList.page
      }
    case REQUEST_MOVIE_LIST_ACTIONS.ERROR:
      const error = action.payload
      return {...movieListDataState, fetching: false, status: 'error',error: error }
    case MOVIE_LIST_UPDATE_PAGE:
      const page = action.payload
      return {...movieListDataState, actualPage: page}
    default:
      return movieListDataState;
  }
};
