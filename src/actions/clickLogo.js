export const clickLogo = (value) => (dispatch) => {
  dispatch({
    type: "CLICKED_LOGO",
    payload: value,
  });
};