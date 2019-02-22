import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from '../reducers/'

const middlewares = [thunk, logger]

const initialState = {
  movieListData: {
    movieLists: [],
    actualQuery: '',
    actualPage: 0,
    fetching: false,
    status: '',
    error: ''
  },
  movieData: {
    movies: [],
    fetching: false,
    status: '',
    error: ''
  }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
