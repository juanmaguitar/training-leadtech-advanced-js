import { createStore } from 'redux'
import reducers from '../reducers'

import {contacts} from '../helpers/static-data'
const selected = []

const store = createStore(reducers, {contacts, selected})

export default store