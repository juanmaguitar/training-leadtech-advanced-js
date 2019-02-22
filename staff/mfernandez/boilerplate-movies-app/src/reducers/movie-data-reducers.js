import { REQUEST_MOVIE_DATA_ACTIONS } from '../constants/actions-type'

const initialMovieDataState = {
  movies: [],
  actualMovieId: 0,
  fetching: false, 
  status: '', 
  error: ''
}

export const reducersMovieData = ( movieDataState = initialMovieDataState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_DATA_ACTIONS.FETCHING:
      console.log(movieDataState)
      return {...movieDataState, fetching: true, status: 'fetching', error: ''}
    case REQUEST_MOVIE_DATA_ACTIONS.SUCCESS:
      const {movies} = movieDataState
      const movie = action.payload
      return {...movieDataState, fetching: false, status: 'success',
        movies: [...movies, movie],
        actualMovieId: movie.id
      }
    case REQUEST_MOVIE_DATA_ACTIONS.ERROR:
      const error = action.payload
      return {...movieDataState, fetching: false, status: 'error', error: error }
    default:
      return movieDataState;
  }
};
