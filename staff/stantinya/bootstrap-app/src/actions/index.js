import { TOGGLE_SELECTED } from "../constants/action-types";

export const toggleSelected = idUser => ({
  type: TOGGLE_SELECTED,
  payload: { idUser }
});
