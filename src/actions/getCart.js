export const getArticleCart = (value) => (dispatch) => {
  dispatch({
    type: "GET_CART",
    payload: value
  });
};
