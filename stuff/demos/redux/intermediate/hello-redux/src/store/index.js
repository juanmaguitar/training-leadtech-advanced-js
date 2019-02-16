import { createStore, applyMiddleware } from "redux"
import reducer from "../reducers"
import loggingMiddleware from "../middleware/loggingMiddleware"
import logger from "redux-logger"

const initialState = { tech: "React " }
const middleware = applyMiddleware(loggingMiddleware, logger)

const store = createStore(reducer, initialState, middleware)

export { store }
