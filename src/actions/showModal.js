export const showModal = (value) => (dispatch) => {
  dispatch({
    type: "SHOW_MODAL",
    payload: value
  });
};
