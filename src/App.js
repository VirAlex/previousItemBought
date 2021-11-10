import React from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { CustomAutocomplete } from "./components/AutoCompleteReact";
import algoliasearch from "algoliasearch";
// import { Autocomplete } from "./components/Autocomplete";
import { ProductItem } from "./components/ProductItem";

import { CustomHits } from "./components/Hits";
import { Configure, Pagination } from "react-instantsearch-dom";

const appId = "latency";
const apiKey = "6be0576ff61c053d5f9a3225e2a90f76";
const searchClient = algoliasearch(appId, apiKey);

function App() {
  return (
    <>
      <div className="app-container">
        <div className="autocomplete-container">
          <h1>Recent Articles Buy</h1>
          <CustomAutocomplete />
        </div>
        <Configure hitsPerPage={8} />
        <CustomHits />
      </div>
      <Pagination />
    </>
  );
}

export default App;
