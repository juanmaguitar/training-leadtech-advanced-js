import { TOGGLE_USER_SELECTION } from "../constants/action-types"

export default (state = {}, action) => {
  const { selected } = state
  switch (action.type) {
    case TOGGLE_USER_SELECTION:
      const {
        payload: { idUser }
      } = action

      if (selected.includes(idUser)) {
        return {
          ...state,
          selected: selected.filter(id => id !== idUser)
        }
      } else {
        return {
          ...state,
          selected: [...selected, idUser]
        }
      }
    default:
      return state
  }
}