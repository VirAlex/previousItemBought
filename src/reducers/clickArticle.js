const initState = {
  clickedArticle: "",
  previousArticleClick: "",
  categories: ""
};

const getArticle = (state = initState, action) => {
  switch (action.type) {
    case "CLICKED_ART":
      return {
        ...state,
        clickedArticle: action.payload,
      };
    case "SET_ARTICLE":
      return {
        ...state,
        previousArticleClick: action.payload,
      };
      case "SET_CATEGORIES":
        return {
          ...state,
          categories: action.payload,
        };
    default:
      return { ...state };
  }
};

export default getArticle;
