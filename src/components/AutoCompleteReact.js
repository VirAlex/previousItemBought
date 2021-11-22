import { useState } from "react";

import { connectAutoComplete } from "react-instantsearch-dom";
import { useDispatch, useSelector } from "react-redux";

// Import actions from redux
import { getArticle } from "../actions/clickedArticle";
import { clickLogo } from "../actions/clickLogo";

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
              dispatch(clickLogo(false));
              setClick(true);
              dispatch(getArticle(""));
              refine(event.currentTarget.value);
            }}
            onClick={() => {
              dispatch(clickLogo(true));
              // console.log("CLICK", click);
              // setClick(!click);
            }}
          />
        </li>
        {hits.map((hit) => (
          <li
            className={`homepage-wrapper ${click && clickLogo ? "display" : "remove"}`}
            key={hit.objectID}
            onClick={(e) => {
              dispatch(getArticle(hit.DISPLAY_NAME));
              refine(hit.DISPLAY_NAME);
              setClick(false);
            }}
          >
            {hit.DISPLAY_NAME}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CustomAutocomplete = connectAutoComplete(Autocomplete);

export { CustomAutocomplete };
