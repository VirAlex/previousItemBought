import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Highlight, connectHits } from "react-instantsearch-dom";

import { showModal } from "../actions/showModal";
import { deleteArticle } from "../actions/getCart";

import buyImage from "../assets/images/payment-method (1).png";

const CartModal = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.getCart);
  const [buyButtonClicked, setBuyButtonClicked] = useState(false);
  return (
    <div className="modal-content">
      <div className="modal-content__titles-cross">
        {/* {cart.length && !buyButtonClicked ? (
          <h1>Your Cart</h1>
        ) : (
          <h1>You don't have any items</h1>
        )}
        {buyButtonClicked ? <h1>Boutton Click</h1> : ""} */}
        {displayTitle(cart, buyButtonClicked)}
        <p
          className="cross-close"
          onClick={() => {
            dispatch(showModal(false));
          }}
        >
          X
        </p>
      </div>
      <div className="hits-wrapper">
        <ul className="hits-list cart-modal">
          {cart.map((hit) => (
            <dispatchEvent
              key={hit.objectID}
              initial="hidden"
              animate="show"
              className="hit-list"
              onClick={() => {}}
            >
              <div className="image-wrapper">
                <img src={hit.IMAGE} alt="" />
              </div>
              <div className="infos-price">
                <div className="weight__wrapper">
                  <p className="weight__text">{hit.PRICE_INT}</p>
                </div>
                <div className="infos">
                  <h3>
                    <Highlight hit={hit} attribute="DISPLAY_NAME" />
                  </h3>
                  <div className="button">
                    {/* <button
                      className="button-buy-me"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(getArticleCart(hit));
                      }}
                    >
                      BUY ME
                    </button> */}
                  </div>
                </div>
              </div>
            </dispatchEvent>
          ))}
        </ul>
      </div>
      {cart.length ? (
        <div className="button">
          <button
            className="button-pay"
            onClick={() => {
              setItemsLocalStorage(cart);
              dispatch(deleteArticle());
              setBuyButtonClicked(true);
              setTimeout(() => {
                dispatch(showModal(false));
              }, 3000);
            }}
          >
            BUY YOUR ITEMS
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartModal;

// We want to take the cart from our store
const setItemsLocalStorage = (cart) => {
  // console.log("Cart", cart);
  // We want to check our local storage
  const previousPurchases = localStorage.getItem("purchaseArticles");
  // console.log(previousPurchases);
  // If there are purchases in our local storage parse them in JSON if not
  const parsedArray = previousPurchases ? JSON.parse(previousPurchases) : [];
  // We want to create a new array with previous purchases and our cart.
  const allPurchases = [...parsedArray, cart].flat();
  // We want to store our cart and previous purchases in our local storage
  localStorage.setItem("purchaseArticles", JSON.stringify(allPurchases));
};

const displayTitle = (cart, buyButtonClicked) => {
  if (cart.length && !buyButtonClicked) {
    return <h1>Your Cart</h1>;
  }
  if (!cart.length && !buyButtonClicked) {
    return <h1>You don't have any items in your cart</h1>;
  }
  if (!cart.length && buyButtonClicked) {
    return (
      <div>
        <h1>Thanks you for your purchases</h1>
        <p>You can close this dialog</p>
        <img src={buyImage} />
      </div>
    );
  }
};
