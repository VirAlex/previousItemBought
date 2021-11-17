export const getArticleCart = (value) => (dispatch) => {
  dispatch({
    type: "GET_CART",
    payload: value,
  });
};

export const deleteArticle = (value) => (dispatch) => {
  dispatch({
    type: "DELETE_CART",
    payload: value,
  });
};
