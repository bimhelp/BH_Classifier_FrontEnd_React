import React, { useState } from "react";
import Button from "../Button/Button";

import { IoSearch } from "react-icons/io5";

const Search = ({ submit, isLoading, error, back }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "search":
        setSearchValue(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedSearch = searchValue.toLocaleLowerCase().trim();

    if (normalizedSearch.length < 1) {
      back();
      return;
    } else {
      // викликаємо функцію
      submit(normalizedSearch);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="search"
            type="text"
            value={searchValue}
            onChange={handleChange}
          ></input>
        </label>
        <Button icon={IoSearch} type="submit"></Button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Search;
