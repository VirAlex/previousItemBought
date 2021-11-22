import { combineReducers } from "redux";

import getCart from "./addCart";
import getArticle from "./clickArticle";
import getModal from "./getModal";
import modifClickLogo from "./clickLogo"

const rootReducer = combineReducers({
  getCart: getCart,
  getArticle: getArticle,
  getModal: getModal,
  modifClickLogo: modifClickLogo
});

export default rootReducer;
