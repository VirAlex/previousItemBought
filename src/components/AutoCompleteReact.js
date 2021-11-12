import { useState } from "react";

import { connectAutoComplete } from "react-instantsearch-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArticle } from "../actions/clickedArticle";

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const { clickedArticle } = useSelector((state) => state.getArticle);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="autocomplete-contain">
        <li className="autocomplete-contain__list">
          <input
            type="search"
            value={clickedArticle ? clickedArticle : currentRefinement}
            onChange={(event) => {
              setClick(true);
              dispatch(getArticle(""));
              refine(event.currentTarget.value);
            }}
            onClick={() => {
              // console.log("CLICK", click);
              // setClick(!click);
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
