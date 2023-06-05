import css from "./AddForm.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addElement } from "../../services/api";
import { useState } from "react";

const AddForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [description, setDescription] = useLocalStorage("description");
  const [code, setCode] = useLocalStorage("code");
  const [price, setPrice] = useLocalStorage("price");
  const [unitcode, setUnitcode] = useLocalStorage("unitcode");
  const [level, setLevel] = useLocalStorage("level");
  const [unit, setUnit] = useLocalStorage("unit");

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
        console.log(response.data);
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
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Description
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            name="description"
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Price
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            name="price"
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Code
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            name="code"
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Unitcode
          <input
            type="text"
            placeholder="Enter unitcode"
            value={unitcode}
            name="unitcode"
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Level
          <input
            type="text"
            placeholder="Enter level"
            value={level}
            name="level"
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Unit
          <input
            type="text"
            placeholder="Enter unit"
            value={unit}
            name="unit"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddForm;
