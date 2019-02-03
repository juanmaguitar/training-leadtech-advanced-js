export default (state, action) => {
  const {type} = action
  const {payload} = action
  const ACTIVE_SESSION = state.activeSession.toLowerCase()
  switch (type) {
    case "SET_ACTIVE_SESSION":
      return {
        ...state,
        activeSession: payload.session
      };
    case "INCREASE_COUNTER":
      return {
        ...state,
        [ACTIVE_SESSION]: state[ACTIVE_SESSION] + 1
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        [ACTIVE_SESSION]: state[ACTIVE_SESSION] - 1
      };

    default:
      return state;
  }
};
