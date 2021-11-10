export const getArticle = (value) => (dispatch) => {
  dispatch({
    type: "CLICKED_ART",
    payload: value
  });
};
