import { SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types'

export default function typing (state = '', { type, payload }) {
  switch (type) {
    case SET_TYPING_VALUE:
      return payload
    case SEND_MESSAGE:
      return ''
    default:
      return state
  }
}
