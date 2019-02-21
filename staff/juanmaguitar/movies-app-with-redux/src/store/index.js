/* eslint-disable */
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducer from "../reducers/"

const popular = {
  isLoading: false,
  hasError: false,
  movies: []
}
const search = {
  isLoading: false,
  hasError: false,
  results: [],
  query: ''
}
const initialState = { popular, search }

const store = createStore(reducer, initialState, 
  composeWithDevTools(  
    applyMiddleware(thunk, logger)
  )
)

export default store
