export const getArticle = (value) => (dispatch) => {
  dispatch({
    type: "CLICKED_ART",
    payload: value,
  });
};

export const setPurchaseArticle = (value) => (dispatch) => {
  dispatch({
    type: "SET_ARTICLE",
    payload: value,
  });
};
