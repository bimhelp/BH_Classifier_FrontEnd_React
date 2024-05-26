import React, { useState } from "react";
import { FormStyled, Input, Label } from "./Search.styled";
import { SearchButton, BackButton } from "../Button/Button";

import { IoSearch } from "react-icons/io5";
import { IoMdBackspace } from "react-icons/io";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";

const Search = ({ submit, isLoading, back, isSubmiting }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const normalizedQuery = event.currentTarget.value.toLowerCase();
    setSearchValue(normalizedQuery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchValue.trim().length < 1) {
      toast.error("Введіть запит в поле пошуку");
      return;
    } else submit(searchValue.trim());
  };

  const clearQuery = () => {
    setSearchValue("");
    back();
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <BackButton
          icon={IoMdBackspace}
          type="button"
          onClick={clearQuery}
        ></BackButton>
        <Label>
          <Input
            name="search"
            type="text"
            onChange={handleChange}
            value={searchValue}
          ></Input>
        </Label>
        <SearchButton
          icon={IoSearch}
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmiting}
        ></SearchButton>
      </FormStyled>
      {isLoading && <BarLoader color="#125b56" width="100%" />}
    </>
  );
};

export default Search;
// _____________________________________________________________________________________
