export const getCart = (value) => (dispatch) => {
  dispatch({
    type: "CLICKED_ART",
    payload: value
  });
};
