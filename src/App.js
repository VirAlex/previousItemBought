import React, { useState } from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { CustomAutocomplete } from "./components/AutoCompleteReact";
import algoliasearch from "algoliasearch";
// import { Autocomplete } from "./components/Autocomplete";
import { ProductItem } from "./components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { CustomHits } from "./components/Hits";
import { Configure, Pagination } from "react-instantsearch-dom";
// Import components
import Modal from "./components/CartModal";
import PreviousPurchasesCarousel from "./components/PreviousPurchasesCarousel";

import logo from "./assets/images/logo.png";

import { showModal } from "./actions/showModal";
import { getArticle } from "./actions/clickedArticle";

const appId = "latency";
const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
const searchClient = algoliasearch(appId, apiKey);

function App({ refine }) {
  const { cart } = useSelector((state) => state.getCart);
  const previousPurchases = JSON.parse(
    localStorage.getItem("purchaseArticles")
  );
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.getModal);
  const { previousArticleClick } = useSelector((state) => state.getArticle);

  return (
    <>
      <div className="app-container">
        {modalShow ? <Modal /> : ""}
        <div className="autocomplete-container">
          <div className="logo-brand">
            <img src={logo} alt="" />
            <h1
              onClick={() => {
                dispatch(showModal(false));
                dispatch(getArticle(""));
                refine("");
              }}
            >
              Gorcery Articles
            </h1>
          </div>
          <div className="search-cart">
            <CustomAutocomplete />
            <div className="cart-number">
              <svg
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(showModal(true));
                }}
                width="30"
                height="38"
                viewBox="0 0 30 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4 2.69995C1.90293 2.69995 1.5 3.1029 1.5 3.59995C1.5 4.09701 1.90293 4.49995 2.4 4.49995H5.39064C6.8802 8.1892 8.34741 11.8852 9.825 15.5812L8.46564 18.8531C8.35176 19.1259 8.3838 19.4548 8.54817 19.7005C8.71257 19.9461 9.00441 20.1012 9.3 20.1H24.3C24.7755 20.1066 25.2128 19.6755 25.2128 19.2C25.2128 18.7245 24.7755 18.2933 24.3 18.3H10.65L11.4281 16.4437L25.875 15.2906C26.2531 15.2609 26.5954 14.9663 26.6812 14.5968L28.4812 6.79683C28.599 6.27146 28.1384 5.6982 27.6 5.69995H7.80936L6.83436 3.26245C6.70086 2.93251 6.35592 2.69996 6 2.69995H2.4ZM8.53125 7.49995H26.4656L25.0687 13.5562L11.3906 14.6437L8.53125 7.49995ZM12.6 21.3C10.9538 21.3 9.6 22.6537 9.6 24.2999C9.6 25.9461 10.9538 27.2999 12.6 27.2999C14.2462 27.2999 15.6 25.9461 15.6 24.2999C15.6 22.6538 14.2462 21.3 12.6 21.3ZM21 21.3C19.3538 21.3 18 22.6538 18 24.2999C18 25.9461 19.3538 27.2999 21 27.2999C22.6462 27.2999 24 25.9461 24 24.2999C24 22.6537 22.6462 21.3 21 21.3ZM12.6 23.0999C13.2734 23.0999 13.8 23.6265 13.8 24.2999C13.8 24.9733 13.2734 25.4999 12.6 25.4999C11.9266 25.4999 11.4 24.9733 11.4 24.2999C11.4 23.6265 11.9266 23.0999 12.6 23.0999ZM21 23.0999C21.6733 23.0999 22.2 23.6265 22.2 24.2999C22.2 24.9733 21.6733 25.4999 21 25.4999C20.3266 25.4999 19.8 24.9733 19.8 24.2999C19.8 23.6265 20.3266 23.0999 21 23.0999Z"
                  fill="#414141"
                />
              </svg>
              {cart.length}
            </div>
          </div>
        </div>
        {previousPurchases ? <PreviousPurchasesCarousel /> : ""}
        {previousArticleClick ? (
          <Configure
            hitsPerPage={12}
            filters={`categories.lvl1:'${previousArticleClick.categories.lvl1}'`}
          />
        ) : (
          <Configure hitsPerPage={12} />
        )}
        <CustomHits />
      </div>
      <Pagination />
    </>
  );
}

export default App;
