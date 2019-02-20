import { TOGGLE_USER_SELECTION } from "../constants/action-types"

export const toggleUserSelection = idUser => ({
  type: TOGGLE_USER_SELECTION,
  payload: {idUser}
})
