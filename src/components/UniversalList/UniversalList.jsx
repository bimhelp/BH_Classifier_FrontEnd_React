import React, { useState } from "react";

const UniversalList = ({
  currentElement,
  subCategories,
  selectCategoryFunk,
  selectedCategoryCode,
  isSelected,
}) => {
  const [filteredCategories, setFilteredCategories] = useState([]);
  // отримує cpvCode для фільтрації категорій

  // компонент повинен приймати список елементів всіх вкладеностей
  //  і фільтрувати тільки для потрібної вкладеності

  // відфільтруються всі елементи в яких код співпадає з кодом поточного елемента

  const currentLevelItems = subCategories.filter((item) =>
    item.Code.serch(/^selectedCategoryCode/)
  );

  if (currentElement.length !== 0) {
    setFilteredCategories(currentLevelItems);
  }

  return (
    <ul>
      <li>
        {filteredCategories.map((element) => (
          <p>{element.Code}</p>
        ))}
      </li>
    </ul>
  );
};

export default UniversalList;

// Якщо будуть структуровані дані можна буде використати рекурсивний компонент
/*
import React from 'react';

const RecursiveItems = ({ listItems }) => {
  const constructListItem = (item) => {
    if (item.nestedItems) {
      return (
        <ul key={item.key}>
          {item.nestedItems.map(constructListItem)}
        </ul>
      )
    } else {
      return <li key={item.key}>{item}</li>
    }
  }

  return (
    <ul>
      {listItems.map(constructListItem)}
    </ul>
  );
};

export default RecursiveItems;
*/
