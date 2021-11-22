import React from "react";

import { Highlight } from "react-instantsearch-dom";
import { useDispatch } from "react-redux";
// Import actions from redux
import { setPurchaseArticle } from "../actions/clickedArticle";
import { clickLogo } from "../actions/clickLogo";
import { setCategories } from "../actions/clickedArticle";

const PreviousPurchasesCarousel = () => {
  const dispatch = useDispatch();
  const previousPurchases = JSON.parse(
    localStorage.getItem("purchaseArticles")
  );
  return (
    <div>
      <div className="hits-wrapper">
        <h3 className="title-carousel">Welcome Back Alex</h3>
        <h3 className="title-carousel">Your previous purchases</h3>
        <ul className="hits-list hits-list-modal">
          {previousPurchases
            ? previousPurchases.map((item) => (
                <li key={item.objectID} className="hit-list">
                  <div className="image-wrapper">
                    <img
                      onClick={() => {
                        dispatch(setPurchaseArticle(item));
                        dispatch(clickLogo(false));
                        dispatch(setCategories(""));
                      }}
                      src={item.IMAGE}
                      alt=""
                    />
                  </div>
                  <div className="infos-price">
                    <div className="infos">
                      <h3
                        onClick={() => {
                          dispatch(setPurchaseArticle(item));
                          dispatch(clickLogo(false));
                          dispatch(setCategories(""));
                        }}
                      >
                        <Highlight hit={item} attribute="DISPLAY_NAME" />
                      </h3>
                      <p>
                        {item.PRICE_INT !== null ? `$ ${item.PRICE_INT}` : ""}
                      </p>
                    </div>
                  </div>
                  <button
                    className="button-show-more"
                    onClick={() => {
                      dispatch(setCategories(item.categories));
                    }}
                  >
                    Show Similar Articles
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default PreviousPurchasesCarousel;
