import { createStore } from './node_modules/redux/dist/redux.js'
import todoApp from './reducers.js'

const store = createStore(todoApp)