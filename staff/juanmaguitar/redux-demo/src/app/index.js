import { addTodo } from './actions/'
import store from './store'

store.dispatch(addTodo('buy gold'))
store.dispatch(addTodo('buy car'))
store.dispatch(addTodo('buy house'))
