/* eslint-disable */
import { applyMiddleware, createStore } from "redux"
import logger from 'redux-logger'

import reducer from "../reducers/"

import { contacts } from "../helpers/static-data"
const selected = []

const initialState = { contacts, selected }

const store = createStore(reducer, initialState, applyMiddleware(logger))

export default store
