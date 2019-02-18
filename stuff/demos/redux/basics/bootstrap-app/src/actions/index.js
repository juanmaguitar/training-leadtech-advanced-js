import {ADD_USER_SELECTION, REMOVE_USER_SELECTION} from '../constants/action-types'

export const addUserSelection = id => ({ type: ADD_USER_SELECTION, payload: {id} });
export const removeUserSelection = id => ({ type: REMOVE_USER_SELECTION, payload: {id} });