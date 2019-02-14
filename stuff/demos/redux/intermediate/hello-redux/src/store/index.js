import { createStore, applyMiddleware } from "redux"
import reducer from "../reducers"
import loggingMiddleware from "../middleware/loggingMiddleware"

const initialState = { tech: "React " }
const middleware = applyMiddleware(loggingMiddleware)

const store = createStore(reducer, initialState, middleware)

export { store }
