import { combineReducers } from "redux";

import getCart from "./addCart";
import getArticle from "./clickArticle";

const rootReducer = combineReducers({
  getCart: getCart,
  getArticle: getArticle,
});

export default rootReducer;
