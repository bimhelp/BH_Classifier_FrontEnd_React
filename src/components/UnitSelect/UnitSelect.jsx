import React, { useState, useContext, useEffect } from "react";
import { authContext as context } from "../../context/authContext";
import { toast } from "react-toastify";

import Select from "react-select";

const defaultOptions = [
  { value: "none", label: "Не визначено" },
  { value: "pcs.", label: "Штука" },
  { value: "m", label: "Метр погонний" },
  { value: "m2", label: "Метр квадратний" },
  { value: "m3", label: "Метр кубічний" },
  { value: "t", label: "Тона" },
  { value: "kg", label: "Кілограм" },
];
const UnitSelect = ({ onSelect, reset, options = defaultOptions, variant }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { role } = useContext(context);

  useEffect(() => {
    if (reset) {
      // console.log("reset: ", reset);
      setSelectedOption(null);
    }
  }, [reset]);

  const makeOptions = (options) => {
    if (role !== "admin" && variant === "add") {
      return options.filter((option) => option.value !== "none");
    } else return options;
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    // Викликати функцію з пропсів для передачі вибраного значення
    onSelect(selectedOption);
  };

  const handleBlur = () => {
    if (!selectedOption) {
      toast.error("Оберіть одиницю виміру");
    }
  };

  // Налаштування стилів для react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,

      // borderColor: state.isFocused ? "black" : "#E74A3B", // колір рамки для фокусу та звичайного стану
      borderColor: selectedOption ? "#3CBC81" : "black", // колір рамки в залежності від вибраної опції
      borderWidth: "2px",
      "&:hover": {
        borderColor: state.isFocused && "black", // колір рамки при наведенні
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999, // щоб випадаючий список був над іншими елементами
    }),
  };

  return (
    <Select
      cacheOptions
      defaultOptions={defaultOptions}
      value={selectedOption}
      options={makeOptions(options)}
      styles={customStyles}
      placeholder="Виберіть одиницю виміру"
      onChange={handleChange}
      onBlur={handleBlur}
      isClearable={variant === "add"}
      required={variant === "add"}
      onSubmit={() => console.log("submit")}
    ></Select>
  );
};

export default UnitSelect;
