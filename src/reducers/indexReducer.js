import { combineReducers } from "redux";

import getCart from "./addCart";
import getArticle from "./clickArticle";
import getModal from "./getModal";

const rootReducer = combineReducers({
  getCart: getCart,
  getArticle: getArticle,
  getModal: getModal
});

export default rootReducer;
