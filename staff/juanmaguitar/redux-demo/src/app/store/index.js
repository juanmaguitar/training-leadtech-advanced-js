/* eslint-disable */
import { createStore } from 'redux'
import reducer from './reducers/'

// const action1 = { type: 'ADD_TODO', text: 'Ir a nadar a la piscina' }
// const action2 = { type: 'TOGGLE_TODO', index: 1 }
// const action3 = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }

const store = createStore(reducer, {})

store.subscribe( () => {
  console.log('--------------')
  console.log(store.getState())
})

export default store
