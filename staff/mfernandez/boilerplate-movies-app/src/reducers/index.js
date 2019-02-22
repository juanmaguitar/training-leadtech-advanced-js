import { combineReducers } from 'redux' 
import {reducersMovieList} from './movie-list-reducers'
import {reducersMovieData} from './movie-data-reducers'

export default combineReducers({
  movieListData: reducersMovieList, 
  movieData: reducersMovieData
});
