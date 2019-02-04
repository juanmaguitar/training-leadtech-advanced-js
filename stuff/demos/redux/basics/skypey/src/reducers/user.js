import { generateUser } from "../helpers/static-data";

export default function user(state = generateUser(), action) {
  return state;
}