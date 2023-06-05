import css from "./AddForm.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addElement } from "../../services/api";

const AddForm = () => {
  const [description, setDescription] = useLocalStorage("description");
  const [price, setPrice] = useLocalStorage("price");

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
      default:
        return;
    }
  };

  // Викликається під час відправлення форми
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit form");
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

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddForm;
