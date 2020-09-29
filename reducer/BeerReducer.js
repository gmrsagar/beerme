export const BeerReducer = (state, action) => {
  switch (action.type) {
    case "SET_BEERS":
      return action.value;
    default:
      return state;
  }
};
