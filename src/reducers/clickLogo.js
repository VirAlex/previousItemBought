const initState = {
  clickedLogo: false,
};

const modifClickLogo = (state = initState, action) => {
  switch (action.type) {
    case "CLICKED_LOGO":
      return {
        ...state,
        clickedLogo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default modifClickLogo;