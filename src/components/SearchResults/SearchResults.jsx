import React from "react";
import MaterialList from "../MaterialList/MaterialList";

const SearchResults = ({ results, query }) => {
  return (
    <div>
      {results.length > 0 && <MaterialList items={results} query={query} />}
    </div>
  );
};

export default SearchResults;
