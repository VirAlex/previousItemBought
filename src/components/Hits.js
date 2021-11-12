import React from "react";
import { Highlight, connectHits } from "react-instantsearch-dom";
import { useDispatch } from "react-redux";
import { getArticleCart } from "../actions/getCart";

import { motion, AnimateSharedLayout } from "framer-motion";

const Hits = ({ hits }) => {
  const listItem = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };
  const dispatch = useDispatch();
  return (
    <AnimateSharedLayout>
      <div className="hits-wrapper">
        <ul className="hits-list">
          {hits.map((hit) => (
            <motion.li
              key={hit.objectID}
              variants={listItem}
              initial="hidden"
              animate="show"
              className="hit-list"
              onClick={() => {}}
            >
              <div className="image-wrapper">
                <img src={hit.image} alt="" />
              </div>
              <div className="infos-price">
                <div className="weight__wrapper">
                  {/* <svg viewBox="0 0 35 23" className="Hit-list__icon">
                  <path
                    id="asda_fav_list_1"
                    d="M7.02 2C7 2.344 7 2.685 7 3h6c0-.315 0-.656-.02-1H18c1 0 2 .784 2 1.667v17.667C20 22.167 19 23 18 23H2c-1 0-2-.833-2-1.666V3.667C0 2.833 1 2 2 2h5.02zM12 2H8c0-1 1-2 2-2s2 1 2 2zM7 17v2h10v-2H7zm-4-5v2h2v-2H3zm0-5v2h2V7H3zm0 10v2h2v-2H3zm4-5v2h10v-2H7zm0-5v2h10V7H7z"
                  ></path>
                  <path
                    id="asda_fav_list_2"
                    d="M24 21c-1.818-1.8-10-7.65-10-12.6C14 5.7 15.818 3 19 3c2 0 4 .82 5 3.295C25 3.82 27 3 29 3c3.182 0 5 2.7 5 5.4 0 4.95-8.182 10.8-10 12.6z"
                  ></path>
                  <g fill="none">
                    <use fill="#3d3d3d"></use>
                    <use fill="#FFF" stroke="#3d3d3d" strokeWidth="1.9"></use>
                  </g>
                </svg> */}
                  <p className="weight__text">${hit.price}</p>
                </div>
                <div className="infos">
                  <h3>
                    <Highlight hit={hit} attribute="name" />
                  </h3>
                  <div className="button">
                    <button
                      className="button-buy-me"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(getArticleCart(hit));
                      }}
                    >
                      BUY ME
                    </button>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </AnimateSharedLayout>
  );
};

const CustomHits = connectHits(Hits);
export { CustomHits };
