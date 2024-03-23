import React from "react";
import MaterialListList from "../MaterialList/MaterialList";

const SearchResults = ({ category, materials, query }) => {
  return (
    <div>
      {category.length > 0 && (
        <MaterialListList items={category} query={query} />
      )}

      {materials.length > 0 && (
        <MaterialListList items={materials} query={query} />
      )}
    </div>
  );
};

export default SearchResults;
