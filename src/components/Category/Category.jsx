import React, { useState } from "react";
import SubCategory from "../SubCategory/SubCategory";
import css from "./Category.module.css";

const Category = ({
  element: { Code = "", DescriptionUA = "" },
  selectCategory,
  isSelected,
  subCategory,
}) => {
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);

  const handleSubCategoryClick = (subCategoryId) => {
    setSelectedSubCategoryId(
      selectedSubCategoryId === subCategoryId ? null : subCategoryId
    );
  };

  return (
    <>
      <div onClick={selectCategory} className={css.categoryWrapper}>
        <div className={css.categoryCode}>{Code}</div>
        <div className={css.categoryDescription}>{DescriptionUA}</div>
      </div>
      <div>
        {/* Якщо категорія вибрана то рендеримо підкатегорії */}
        {isSelected && (
          <ul>
            {subCategory.map((subElement) => (
              <li key={subElement._id}>
                <div onClick={() => handleSubCategoryClick(subElement._id)}>
                  <SubCategory
                    element={subElement}
                    selectCategory={selectCategory}
                  />
                </div>
                {/* Якщо підкатегорія вибрана, рендеримо наступний рівень вкладеності */}
                {selectedSubCategoryId === subElement._id && (
                  <ul>
                    {/* Вкладений список підкатегорій */}
                    {subElement.subCategories.map((nestedSubElement) => (
                      <li key={nestedSubElement._id}>
                        <div>
                          <SubCategory
                            element={nestedSubElement}
                            selectCategory={selectCategory}
                          />
                        </div>
                        {/* І так далі, якщо потрібно */}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Category;
