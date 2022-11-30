const stateDefault = {
  buger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};
export const BugerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD": {
      let { amount, item } = action;

      let total = state.total;
      let buger = { ...state.buger };
      let menu = state.menu;
      if (amount === -1 && buger[item] < 1) {
        return { ...state };
      }
      buger[item] += amount;
      total += amount * menu[item];
      return { ...state, total, buger };
    }
    default:
      return { ...state };
  }
};
