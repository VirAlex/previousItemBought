import { connectAutoComplete } from "react-instantsearch-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCart } from "../actions/clickedArticle";

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const { clickedArticle } = useSelector((state) => state.getArticle);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="autocomplete-contain">
        <li className="autocomplete-contain__list">
          <input
            type="search"
            value={clickedArticle ? clickedArticle : currentRefinement}
            onChange={(event) => {
              console.log(event)
              refine(event.currentTarget.value);
            }}
          />
        </li>
        {hits.map((hit) => (
          <li
            className="autocomplete-contain__item"
            key={hit.objectID}
            onClick={(e) => {
              dispatch(getCart(hit.name));
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
