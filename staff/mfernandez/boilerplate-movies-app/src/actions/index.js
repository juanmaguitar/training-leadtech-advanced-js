import { REQUEST_MOVIE_LIST_ACTIONS, REQUEST_MOVIE_DATA_ACTIONS, MOVIE_LIST_UPDATE_PAGE } from '../constants/actions-type';
import { getCategoryMovies, getSearchMovie, getMovieData } from '../services'

export const categoryMoviesRequest = (category, page) => requestServiceFetch(
  REQUEST_MOVIE_LIST_ACTIONS, 
  getCategoryMovies, 
  {category, page}
)

export const updateActualPage = page => {
  return dispatch => dispatch({
    type: MOVIE_LIST_UPDATE_PAGE,
    payload: page
  })
}

export const movieDataRequest = id => requestServiceFetch(
  REQUEST_MOVIE_DATA_ACTIONS,
  getMovieData,
  {id}
)

export const searchMoviesRequest = (query, page) => requestServiceFetch(
  REQUEST_MOVIE_LIST_ACTIONS, 
  getSearchMovie, 
  {query, page}
)

export const searchMoviesRequestAndGo = (query, page, onwProps) => dispatch => {
  dispatch(searchMoviesRequest(query, page))
  onwProps.history.push(`/search/q/${query}`)
}

const requestServiceFetch = (requestActions, requestService, paramsService) => {
  const { FETCHING, SUCCESS, ERROR} = requestActions
  console.log('hola')
  console.log(paramsService)
  return dispatch => {
    console.log(FETCHING)
    dispatch({type: FETCHING})
    console.log(SUCCESS)
    const request = requestService(paramsService)
    return request
      .then((response) => dispatch(requestSuccess(SUCCESS, response)))
      .catch((err) => dispatch(requestError(ERROR, err.message)))
  }
}

export const requestSuccess = (actionSuccess, response) => {
  return {
    type: actionSuccess,
    payload: response
  }
}

export const requestError = (actionError, error) => {
  return {
    type: actionError,
    payload: error
  }
}
