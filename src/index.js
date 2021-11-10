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
window.appID = "latency";
window.key = "6be0576ff61c053d5f9a3225e2a90f76";
window.index = "instant_search";

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
