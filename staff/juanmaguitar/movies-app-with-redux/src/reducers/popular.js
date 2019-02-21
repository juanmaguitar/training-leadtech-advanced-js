import {
  GET_POPULAR_MOVIES_IS_LOADING,
  GET_POPULAR_MOVIES_HAS_ERROR, 
  GET_POPULAR_MOVIES_SUCCESS 
} from '../constants/action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_IS_LOADING:
      const {isLoading} = action
      return {
        ...state,
        isLoading
      }
    case GET_POPULAR_MOVIES_HAS_ERROR:
      const {hasError} = action
      return {
        ...state,
        hasError
      }
    case GET_POPULAR_MOVIES_SUCCESS:
      const {movies} = action
      return {
        ...state,
        movies
      }
      
    default:
      return state
  }
}