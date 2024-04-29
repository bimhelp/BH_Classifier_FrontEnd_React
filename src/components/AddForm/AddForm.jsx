import React, { useState, useRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addElement } from "../../services/api";
import { Button } from "../../components/Button/Button";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";
import {
  InputWrapper,
  StyledForm,
  TextArea,
  InputGroup,
  Input,
  DescriptionWrapper,
} from "./AddForm.styled";
// const units = ["kg", "m", "m2", "m3", "m4", "pcs", "t"];
// import { validationColor } from "../../services/utility";
const AddForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [description, setDescription] = useLocalStorage("description");
  const [code, setCode] = useLocalStorage("code", "");
  const [price, setPrice] = useLocalStorage("price");
  const [level, setLevel] = useLocalStorage("level");
  const [unit, setUnit] = useLocalStorage("unit");
  const textAreaRef = useRef(null);

  // Відповідає за оновлення стану
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Оновлення вмісту і розміру текстового блоку
    // Перевірка наявності посилання на DOM-елемент
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 0; // Автоматична висота
      textAreaRef.current.style.height = `${
        textAreaRef.current.scrollHeight - 16
      }px`; // Встановлення висоти
    }
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
    const newElement = { description, price, code, level, unit };
    console.log(newElement);

    // Запит в базу даних
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

    // Очистка форми
    setDescription("");
    setCode("");
    setLevel("");
    setPrice("");
    setUnit("");
  };

  return (
    <>
      {/* <h3>Створити новий матеріал</h3> */}

      <StyledForm onSubmit={handleSubmit}>
        <CloseButton onClick={onClose} icon={CgClose}></CloseButton>
        <DescriptionWrapper>
          <label htmlFor="description">Description</label>
          <TextArea
            ref={textAreaRef}
            type="text"
            placeholder="Enter description"
            value={description}
            name="description"
            onChange={handleChange}
            id="description"
          />
        </DescriptionWrapper>
        <InputGroup>
          <InputWrapper>
            <label>Price</label>
            <Input
              type="text"
              placeholder="Enter price"
              value={price}
              name="price"
              onChange={handleChange}
            />
          </InputWrapper>

          <InputWrapper>
            <label>Level</label>
            <Input
              type="text"
              placeholder="Enter level"
              value={level}
              name="level"
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Unit</label>
            <Input
              type="text"
              placeholder="Enter unit"
              value={unit}
              name="unit"
              onChange={handleChange}
            />
          </InputWrapper>
        </InputGroup>

        <Button type="submit" style={{ marginLeft: "auto" }}>
          Додати
        </Button>
      </StyledForm>
      {isLoading && <BarLoader color="#125b56" width="100%" />}
    </>
  );
};

export default AddForm;
