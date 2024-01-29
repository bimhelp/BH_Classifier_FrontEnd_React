import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FormStyled, Input } from "./Search.styled";
import { SearchButton, BackButton } from "../Button/Button";

import { IoSearch } from "react-icons/io5";
import { IoMdBackspace } from "react-icons/io";

const Search = ({ submit, isLoading, error, back }) => {
  const [searchValue, setSearchValue] = useState("");
  const initialValues = {
    search: "",
  };

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

  const handleSubmit = (values, actions) => {
    console.log("values: ", values);
    // console.log("actions: ", actions);
    // event.preventDefault();
    // const normalizedSearch = searchValue.toLocaleLowerCase().trim();
    const normalizedSearch = values.toLocaleLowerCase().trim();
    console.log("values: ", values);
    submit(values);

    if (normalizedSearch.length < 1) {
      back();
      return;
    } else {
      // викликаємо функцію
      submit(normalizedSearch);
    }
  };
  const clearQuery = () => {
    setSearchValue("");
    back();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormStyled>
          <BackButton
            icon={IoMdBackspace}
            type="button"
            onClick={clearQuery}
          ></BackButton>
          <label>
            <Input
              name="search"
              type="text"
              // value={searchValue}
              // onChange={handleChange}
            ></Input>
          </label>
          <SearchButton icon={IoSearch} type="submit"></SearchButton>
        </FormStyled>
      </Formik>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Search;
