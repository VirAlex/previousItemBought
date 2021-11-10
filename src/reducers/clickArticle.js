const initState = {
  clickedArticle: "",
};

const getArticle = (state = initState, action) => {
  switch (action.type) {
    case "CLICKED_ART":
      return {
        ...state,
        clickedArticle: action.payload,
      };
    default:
      return { ...state };
  }
};

export default getArticle;