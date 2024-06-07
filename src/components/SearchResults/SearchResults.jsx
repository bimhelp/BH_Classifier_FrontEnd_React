import React from "react";
import MaterialList from "../MaterialList/MaterialList";
import ServiceList from "../ServiceList/ServiceList";

const SearchResults = ({ results, query, variant, byId }) => {
  if (variant === "material") {
    return (
      <div>
        {results.length > 0 && (
          <MaterialList items={results} query={query} byId={byId} />
        )}
      </div>
    );
  }
  if (variant === "service") {
    return (
      <div>
        {results.length > 0 && (
          <ServiceList items={results} query={query} byId={byId} />
        )}
      </div>
    );
  }
};

export default SearchResults;
