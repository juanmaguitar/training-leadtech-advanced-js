export default (state, action) => {
  const {type, payload} = action
  switch (type) {
    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - payload.amount
      };

    default:
      return state;
  }
};
