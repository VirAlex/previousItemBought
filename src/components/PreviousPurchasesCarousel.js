import React from "react";

import { Highlight } from "react-instantsearch-dom";

const PreviousPurchasesCarousel = () => {
  const previousPurchases = JSON.parse(
    localStorage.getItem("purchaseArticles")
  );
  return (
    <div>
      <div className="hits-wrapper">
        <h1>Welcome Back Alex</h1>
        <ul className="hits-list hits-list-modal">
          {previousPurchases
            ? previousPurchases.map((item) => (
                <li key={item.objectID} className="hit-list" onClick={() => {}}>
                  <div className="image-wrapper">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="infos-price">
                    <div className="infos">
                      <h3>
                        <Highlight hit={item} attribute="name" />
                      </h3>
                      <p>{item.price !== null ? `$ ${item.price}` : ""}</p>
                    </div>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default PreviousPurchasesCarousel;
