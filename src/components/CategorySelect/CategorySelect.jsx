import React, { useState, useEffect } from "react";

import { StyledSelect } from "./CategorySelect.styled";
import { makeOptions } from "../../services";

const CategorySelect = ({ category, isLoading, onSelect, isDisabled }) => {
  const [options, setOptions] = useState([]);

  // // Записуємо опції в стейт
  useEffect(() => {
    setOptions(makeOptions(category));
  }, [category]);

  return (
    <>
      <StyledSelect
        options={options}
        isLoading={isLoading}
        isDisabled={isDisabled}
        onChange={(option) => {
          onSelect(option.value);
        }}
      ></StyledSelect>
    </>
  );
};

export default CategorySelect;
