import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./assets/styles/index.scss";

import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch"



//REACT REDUX CONFIF
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/indexReducer";
import { Provider } from "react-redux";

// DEV TOOL
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//CREATE STORE +IMPORT ALL REDUCER IN ONE
const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);




//CHANGE ME IF USING NEW INDEX
window.appID = "T28VFYO9RS";
window.key = "d51558b9d3daea110f05e8c1a7b65253";
window.index = "Asda_v3";

const searchClient = algoliasearch(window.appID, window.key);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <InstantSearch searchClient={searchClient} indexName={window.index}>
      <App />
    </InstantSearch>
  </Provider>,
  rootElement
);
