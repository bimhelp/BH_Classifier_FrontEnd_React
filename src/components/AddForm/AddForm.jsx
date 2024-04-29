import React, { useState, useRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addElement } from "../../services/api";
import { Button } from "../../components/Button/Button";
import { toast } from "react-toastify";
import { BarLoader } from "react-spinners";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";
import * as yup from "yup";
import {
  InputWrapper,
  StyledForm,
  TextArea,
  InputGroup,
  Input,
  DescriptionWrapper,
} from "./AddForm.styled";

const AddForm = ({ onClose, _id, Code, ParentElementId }) => {
  const textAreaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [DescriptionUA, setDescriptionUA] = useLocalStorage("descriptionUA");
  const [DescriptionEN, setDescriptionEN] = useLocalStorage("descriptionEN");
  const [priceUAH, setPriceUAH] = useLocalStorage("priceUAH");
  const [unit, setUnit] = useLocalStorage("unit");
  const [dimensions, setDimensions] = useLocalStorage("dimensions");
  const [length, setLength] = useLocalStorage("length");
  const [width, setWidth] = useLocalStorage("width");
  const [height, setHeight] = useLocalStorage("height");
  const [density, setDensity] = useLocalStorage("density");

  const unitTypes = ["m", "m2", "m3", "t", "kg", "pcs."];
  const initialValues = {
    DescriptionUA: "",
    DescriptionEN: "",
    PriceUAH: "",
    Unit: "",
    Dimensions: "",
    Length: "",
    Width: "",
    Height: "",
    Density: "",
    WeightElement: "",
    Perimeter: "",
    Area: "",
    Volume: "",
    WriteOffCoefficient: "",
    Consumption: "",
    ConsumptionPer1m2: "",
    ConsumptionPer1m3: "0",
    ConsumptionPer1m: "",
    ConsumptionPer1t: "",
    OwnerBarcode: "",
  };

  const addElementSchema = yup.object().shape({
    DescriptionUA: yup
      .string()
      .min(3, "Занадто кородкий опис")
      .max(500, "Занадто довкий опис")
      .required("Обов'язкове поле"),
    DescriptionEN: yup
      .string()
      .min(3, "Занадто кородкий опис")
      .max(500, "Занадто довкий опис"),
    PriceUAH: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число")
      .required("Обов'язкове поле"),
    Unit: yup
      .string()
      .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
      .required('Поле "unit" обов\'язкове для заповнення'),
    Dimensions: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Length: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Width: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Height: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Density: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    WeightElement: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Perimeter: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Area: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Volume: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    WriteOffCoefficient: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    Consumption: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    ConsumptionPer1m2: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    ConsumptionPer1m3: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    ConsumptionPer1m: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    ConsumptionPer1t: yup
      .number()
      .min(1, "Мінімум один символ")
      .max(1000000, "Занадто велике число"),
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто кородкий опис")
      .max(500, "Занадто довкий опис"),
  });

  // Відповідає за оновлення стану
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Функція зміни розміру інпута description
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 0; // Автоматична висота
      textAreaRef.current.style.height = `${
        textAreaRef.current.scrollHeight - 16
      }px`; // Встановлення висоти
    }

    // switch (name) {
    //   case "descriptionUA":
    //     setDescriptionUA(value);
    //     break;
    //   case "descriptionEN":
    //     setDescriptionUA(value);
    //     break;
    //   case "priceUAH":
    //     setPrice(value);
    //     break;
    //   case "unit":
    //     setUnit(value);
    //     break;
    //   case "consumption":
    //     setConsumption(value);
    //     break;
    //   case "dimensions":
    //     setDimentions(value);
    //     break;
    //   case "length":
    //     setLength(value);
    //     break;
    //   case "width":
    //     setWidth(value);
    //     break;

    //   case "height":
    //     setHeight(value);
    //     break;

    //   case "density":
    //     setDensity(value);
    //     break;

    //   case "weightElement":
    //     setWeightElement(value);
    //     break;

    //   case "perimeter":
    //     setPerimeter(value);
    //     break;

    //   case "area":
    //     setArea(value);
    //     break;

    //   case "volume":
    //     setVelume(value);
    //     break;

    //   case "writeOffCoefficient":
    //     setWriteOffCoefficient(value);
    //     break;

    //   case "consumption":
    //     setConsumption(value);
    //     break;

    //   case "consumptionPer1m2":
    //     setConsumptionPer1m2(value);
    //     break;
    //   case "consumptionPer1m3":
    //     setConsumptionPer1m3(value);
    //     break;
    //   case "consumptionPer1m":
    //     setConsumptionPer1m(value);
    //     break;
    //   case "consumptionPer1t":
    //     setConsumptionPer1t(value);
    //     break;
    //   case "ownerBarcode":
    //     setOwnerBarcode(value);
    //     break;

    //   default:
    //     return;
    // }
  };

  // Викликається під час відправлення форми
  const handleSubmit = (event) => {
    event.preventDefault();
    const newElement = {
      ParentElementId,
      DescriptionUA,
    };
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

    return;
    // викликаємо функцію
    addNewElement(newElement);

    // Очистка форми
    setDescriptionUA("");
    setUnit("");
  };

  return (
    <>
      {/* <h3>Створити новий матеріал</h3> */}

      <StyledForm onSubmit={handleSubmit}>
        <CloseButton onClick={onClose} icon={CgClose}></CloseButton>
        <DescriptionWrapper>
          <label htmlFor="descriptionUa">Опис</label>
          <TextArea
            ref={textAreaRef}
            type="text"
            placeholder="Введіть опис"
            value={DescriptionUA}
            name="descriptionUA"
            onChange={handleChange}
            id="descriptionUa"
          />
        </DescriptionWrapper>
        <InputGroup>
          <InputWrapper>
            <label>Price</label>
            <Input
              type="text"
              placeholder="Enter price"
              value={priceUAH}
              name="price"
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
