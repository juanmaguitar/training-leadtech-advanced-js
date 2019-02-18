
export default (state: selected, action) => {
  console.log(selected, action)
  const {payload: {id}} = action
  switch (action.type) {
    case "ADD_USER_SELECTION":
      return {
        selected: selected.filter(_id => _id !== id)
      };
    case "REMOVE_USER_SELECTION":
      return {
        selected: [...selected, id]
      };
    default:
      return state;
  }
};