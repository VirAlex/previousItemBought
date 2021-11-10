import { autocomplete } from "@algolia/autocomplete-js";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import React, { createElement, Fragment, useEffect, useRef } from "react";
import { render } from "react-dom";

export function Autocomplete(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }
    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: "RECENT_SEARCH",
      limit: 5
    });

    const search = autocomplete({
      container: containerRef.current,
      openOnFocus: true,
      plugins: [recentSearchesPlugin],
      renderer: { createElement, Fragment },
      render({ children }, root) {
        render(children, root);
      },
      ...props
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}
