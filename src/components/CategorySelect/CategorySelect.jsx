import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { makeOptions } from "../../services";
import { searchMaterialByDescription } from "../../services";
import { toast } from "react-toastify";
import CustomOption from "../CustomOption/CustomOption";

const CategorySelect = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const loadOptions = async (inputValue) => {
    const normalizedQuery = inputValue.toLowerCase().trim();
    if (normalizedQuery.length < 1) {
      // toast.error("Введіть запит в поле пошуку");
      return [];
    }

    try {
      // Виконати запит до сервера для отримання даних на основі введеного тексту
      const response = await searchMaterialByDescription(normalizedQuery);

      // відфільтрувати тільки категорії
      const category = response.data.filter((item) => item.Unit === "category");
      const sortedCategory = category.sort(
        (first, second) =>
          first.ElementNestingLevel - second.ElementNestingLevel
      );

      return makeOptions(sortedCategory);
    } catch (error) {
      toast.error(`Не вдалось знайти ${normalizedQuery}`);
      return [];
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // Викликати функцію з пропсів для передачі вибраного значення
    onSelect(selectedOption);
  };

  const handleInputChange = (inputValue, { action }) => {
    if (action === "input-change") {
      setInputValue(inputValue);
      setSelectedOption(null);
    }
  };

  const handleBlur = () => {
    const normalizedQuery = inputValue.toLowerCase().trim();
    if (normalizedQuery.length < 1) {
      toast.error("Введіть запит в поле пошуку категорії");
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
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={handleChange}
      value={selectedOption}
      onInputChange={handleInputChange}
      components={{ Option: CustomOption }} // Передача кастомного компонента для опцій
      styles={customStyles}
      isClearable // додає кнопку очищення
      placeholder="Введіть назву категорії"
      onBlur={handleBlur}
      noOptionsMessage={() => "Категорій не знайдено"}
      required={true}
    />
  );
};

export default CategorySelect;
