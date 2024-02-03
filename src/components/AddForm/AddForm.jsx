import React, { useState, useEffect } from "react";
import css from "./AddForm.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addElement } from "../../services/api";
import CategorySelect from "../CategorySelect/CategorySelect";
import {
  getMainCategory,
  getSubCategory,
  searchMaterials,
} from "../../services/api";
import ShowError from "../ShowError/ShowError";
import { cutCpvCode } from "../../services";
import { filterNextLevelItems } from "../../services";

const AddForm = () => {
  const [mainCategory, setMainCategory] = useLocalStorage("main", []);
  const [subCategories, setSubCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [firstLevel, setFirstLevel] = useState([]);
  const [secondLevel, setSecondLevel] = useState([]);
  const [thirdLevel, setThirdLevel] = useState([]);

  const [selectedCode, setSelectedCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const [description, setDescription] = useLocalStorage("description");
  const [code, setCode] = useLocalStorage("code", "");
  const [price, setPrice] = useLocalStorage("price");
  const [unitcode, setUnitcode] = useLocalStorage("unitcode");
  const [level, setLevel] = useLocalStorage("level");
  const [unit, setUnit] = useLocalStorage("unit");

  // Запит по всі головні категорії якщо їх немає в localstorage
  useEffect(() => {
    if (mainCategory.length < 1) {
      // console.log("запит по main category");
      async function getCategory() {
        setIsLoading(true);
        setError(false);
        try {
          const response = await getMainCategory();
          setMainCategory(response.data);
          setError(null);
        } catch {
          setError("Щось пішло не так, спробуйте перезавантажити сторінку");
        } finally {
          setIsLoading(false);
        }
      }
      getCategory();
    }
  }, [mainCategory.length, setMainCategory]);

  // Запит по під категорії
  useEffect(() => {
    setSubCategories([]);
    async function subCategory(selectedCode) {
      // console.log("selectedCode:", selectedCode);
      setIsLoading(true);
      setError(null);
      // console.log("setIsLoading:  true");
      try {
        const response = await getSubCategory(selectedCode);
        // console.log("response: ", response);
        setSubCategories(response.data.slice(1));
      } catch (error) {
        setError("Не вдалось завантажити підкагеторії");
      } finally {
        // console.log("setIsLoading:  false");
        setIsLoading(false);
      }
    }

    if (selectedCode) {
      // console.log("get sub categorys");
      subCategory(selectedCode);
    }
  }, [selectedCode]);

  function selectCategory(value) {
    console.log("select category", value);
    setSelectedCode(cutCpvCode(value));
  }

  function selectFirstLevel(value) {
    console.log("select first", value);
    // console.log(filterNextLevelItems(subCategories, cutCpvCode(value)));
    setFirstLevel(
      filterNextLevelItems(subCategories, cutCpvCode(value)).slice(1)
    );
  }

  function selectSecondLevel(value) {
    console.log("select second", value);
    setSecondLevel(
      filterNextLevelItems(subCategories, cutCpvCode(value)).slice(1)
    );
  }
  function selectThirdLevel(value) {
    console.log("select third", value);
    setThirdLevel(
      filterNextLevelItems(subCategories, cutCpvCode(value)).slice(1)
    );
  }

  async function selectFourLevel(value) {
    console.log("select four", value);

    // try {
    //   const response = await searchMaterials(cutCpvCode(value));
    //   console.log("response: ", response);
    //   //  setSubCategories(response.data.slice(1));
    // } catch (error) {
    //   setError("Не вдалось завантажити підкагеторії");
    // } finally {
    //   // console.log("setIsLoading:  false");
    // }
  }

  useEffect(() => {
    // console.log(subCategories);
    setFilteredCategories(filterNextLevelItems(subCategories, selectedCode));
  }, [selectedCode, subCategories]);

  // function selectSubCategory(selectCategory) {
  //   console.log("code: ", selectCategory);
  //   setLastLevelCode(cutCpvCode(selectCategory));
  // }
  // function selectLastCategory(selectCategory) {
  //   console.log("last code: ", selectCategory);
  // }

  // Відповідає за оновлення стану
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "code":
        setCode(value);
        break;
      case "unitcode":
        setUnitcode(value);
        break;
      case "level":
        setLevel(value);
        break;
      case "unit":
        setUnit(value);
        break;
      default:
        return;
    }
  };

  // Викликається під час відправлення форми
  const handleSubmit = (event) => {
    event.preventDefault();
    const newElement = { description, price, code, unitcode, level, unit };
    // console.log(newElement);

    async function addNewElement(data) {
      setIsLoading(true);
      try {
        const response = await addElement(data);
        // console.log(response.data);
      } catch {
        setError("error");
      } finally {
        setIsLoading(false);
      }
    }
    // викликаємо функцію
    addNewElement(newElement);

    setDescription("");
    setCode("");
    setLevel("");
    setPrice("");
    setUnit("");
    setUnitcode("");
  };

  return (
    <>
      <div className={css.formWrapper}>
        <h2>Add Item</h2>
        {error && <ShowError>{error}</ShowError>}
        <CategorySelect
          category={mainCategory}
          onSelect={selectCategory}
          isLoading={isLoading}
          isDisabled={false}
        />
        {filteredCategories && (
          <CategorySelect
            category={filteredCategories}
            onSelect={selectFirstLevel}
            isLoading={isLoading}
          />
        )}
        {firstLevel.length > 0 && (
          <CategorySelect
            category={firstLevel}
            onSelect={selectSecondLevel}
            isLoading={isLoading}
          />
        )}
        {secondLevel.length > 0 && (
          <CategorySelect
            category={secondLevel}
            onSelect={selectThirdLevel}
            isLoading={isLoading}
          />
        )}
        {thirdLevel.length > 0 && (
          <CategorySelect
            category={thirdLevel}
            onSelect={selectFourLevel}
            isLoading={isLoading}
          />
        )}

        <p>{code}</p>
        <form onSubmit={handleSubmit} className={css.form}>
          {/* <div className={css.inputWrapper}>
            <label className={css.label}>Code</label>
            <input
              type="text"
              placeholder="Enter code"
              value={code}
              name="code"
              className={css.input}
              onChange={handleChange}
            />
          </div> */}
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor="description">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              value={description}
              name="description"
              onChange={handleChange}
              className={css.input}
              id="description"
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label}>Price</label>
            <input
              type="text"
              placeholder="Enter price"
              value={price}
              name="price"
              className={css.input}
              onChange={handleChange}
            />
          </div>

          <div className={css.inputWrapper}>
            <label className={css.label}>Unitcode</label>
            <input
              type="text"
              placeholder="Enter unitcode"
              value={unitcode}
              name="unitcode"
              className={css.input}
              onChange={handleChange}
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label}>Level</label>
            <input
              type="text"
              placeholder="Enter level"
              value={level}
              name="level"
              className={css.input}
              onChange={handleChange}
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label}>Unit</label>
            <input
              type="text"
              placeholder="Enter unit"
              value={unit}
              name="unit"
              className={css.input}
              onChange={handleChange}
            />
          </div>

          <button className={css.submitBtn} type="submit">
            Send
          </button>
        </form>
        {isLoading && <p>Sending data...</p>}
      </div>
    </>
  );
};

export default AddForm;
