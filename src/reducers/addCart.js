const initState = {
  cart: [],
};

const getCart = (state = initState, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      case "DELETE_CART":
        return {
          ...state,
          cart: []
        }
    default:
      return { ...state };
  }
};

export default getCart;
