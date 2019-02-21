import { TOGGLE_SELECTED } from "../constants/action-types";

// receives state and action as parameters and returns the new state
export default function toggleSelected(state = {}, action) {
  const { selected } = state;

  switch (action.type) {
    case TOGGLE_SELECTED:
      const {
        payload: { idUser }
      } = action;

      if (selected.includes(idUser)) {
        return {
          ...state,
          selected: selected.filter(id => id !== idUser)
        };
      } else {
        return {
          ...state,
          selected: [...selected, idUser]
        };
      }
    default:
      return state;
  }
}
