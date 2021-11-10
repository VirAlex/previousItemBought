import algoliasearch from "algoliasearch/lite";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import React from "react"

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

export default function Autocomplete() {
  // (1) Create a React state.
  const [autocompleteState, setAutocompleteState] = React.useState({});
  const autocomplete = React.useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          // (2) Synchronize the Autocomplete state with the React state.
          setAutocompleteState(state);
        },
        getSources() {
          return [
            // (3) Use an Algolia index source.
            {
              sourceId: "products",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "instant_search",
                      query,
                      params: {
                        hitsPerPage: 4,
                        highlightPreTag: "<mark>",
                        highlightPostTag: "</mark>",
                      },
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
          ];
        },
      }),
    []
  );
  const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
    key: "RECENT_SEARCH",
    limit: 5
  });

  return (
    <div className="aa-Autocomplete" {...autocomplete.getRootProps({})}>
      <input className="aa-Input" {...autocomplete.getInputProps({})} />
      <div className="aa-Panel" {...autocomplete.getPanelProps({})}>
        {autocompleteState.isOpen &&
          autocompleteState.collections.map((collection, index) => {
            const { source, items } = collection;

            return (
              <div key={`source-${index}`} className="aa-Source">
                {items.length > 0 && (
                  <ul className="aa-List" {...autocomplete.getListProps()}>
                    {items.map((item) => (
                      <li
                        key={item.objectID}
                        className="aa-Item"
                        {...autocomplete.getItemProps({
                          item,
                          source,
                        })}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
