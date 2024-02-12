import React, { useState } from "react";
import css from "./AddForm.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addElement } from "../../services/api";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { toast } from "react-toastify";
import Table from "../Table/Table";

const units = ["kg", "m", "m2", "m3", "m4", "pcs", "t"];

const AddForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [description, setDescription] = useLocalStorage("description");
  const [code, setCode] = useLocalStorage("code", "");
  const [price, setPrice] = useLocalStorage("price");
  const [unitcode, setUnitcode] = useLocalStorage("unitcode");
  const [level, setLevel] = useLocalStorage("level");
  const [unit, setUnit] = useLocalStorage("unit");
  const [modalOpen, setModalOpen] = useState(false);

  // Показує або приховує модалку
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Відповідає за оновлення стану
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "code":
        setCode(value);
        break;
      case "companyCode":
        setUnit(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "weight":
        setCode(value);
        break;
      case "length":
        setCode(value);
        break;
      case "width":
        setCode(value);
        break;
      case "hight":
        setCode(value);
        break;
      case "density":
        setCode(value);
        break;
      case "unit":
        setUnit(value);
        break;
      case "consumption":
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
        toast.error("Не вдалось додати матеріал", {
          autoClose: false,
        });
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
      <h2>Add Item</h2>

      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.label}>Code</label>
          <Button onClick={toggleModal}>
            Виберіть категорію в яку хочете додати матеріал
          </Button>
          {modalOpen && (
            <Modal
              onClose={toggleModal}
              title="Виберіть категорію в яку хочете додати матеріал"
            >
              <p>Ви вибрали:</p>
              <Table />
            </Modal>
          )}
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            name="code"
            className={css.input}
            onChange={handleChange}
          />
        </div>
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

        <Button type="submit">Send</Button>
      </form>
      {isLoading && <p>loading...</p>}
    </>
  );
};

export default AddForm;
