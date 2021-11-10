import { useState } from "react";

import { connectAutoComplete, Configure } from "react-instantsearch-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArticle } from "../actions/clickedArticle";

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const { clickedArticle } = useSelector((state) => state.getArticle);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  console.log("CLICK", click);
  return (
    <div>
      <ul className="autocomplete-contain">
        <li className="autocomplete-contain__list">
          <input
            type="search"
            value={clickedArticle ? clickedArticle : currentRefinement}
            onChange={(event) => {
              console.log(event);
              dispatch(getArticle(""));
              refine(event.currentTarget.value);
            }}
            onClick={() => {
              console.log("CLICK", click);
              setClick(true);
            }}
          />
        </li>
        {hits.map((hit) => (
          <li
            className={`homepage-wrapper ${click ? "display" : "remove"}`}
            key={hit.objectID}
            onClick={(e) => {
              dispatch(getArticle(hit.name));
              refine(hit.name);
              setClick(false);
            }}
          >
            {hit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CustomAutocomplete = connectAutoComplete(Autocomplete);

export { CustomAutocomplete };
