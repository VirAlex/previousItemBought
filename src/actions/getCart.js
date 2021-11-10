export const getCart = (value) => (dispatch) => {
  dispatch({
    type: "GET_CART",
    payload: value
  });
};
