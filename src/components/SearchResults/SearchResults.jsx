import React from "react";
import CategoryList from "../CategoryList/CategoryList";

const SearchResults = ({ category, materials, query }) => {
  return (
    <div>
      {category.length > 0 && <CategoryList items={category} query={query} />}

      {materials.length > 0 && <CategoryList items={materials} query={query} />}
    </div>
  );
};

export default SearchResults;
