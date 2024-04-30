import React, { useRef } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button } from "../../components/Button/Button";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";
import {
  InputWrapper,
  StyledForm,
  TextArea,
  InputGroup,
  Input,
  DescriptionWrapper,
  ErrorMessageStyled,
} from "./AddForm.styled";
// import { toast } from "react-toastify";
// import { addElement } from "../../services/api";
// import { BarLoader } from "react-spinners";

const AddForm = ({ onClose, _id, Code, ParentElementId }) => {
  const textAreaRef = useRef(null); // отримуємо елемент textarea щоб зчитати позицію скролу в textarea
  const unitTypes = ["m", "m2", "m3", "t", "kg", "pcs."];

  // Початкові значення
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
    ConsumptionPer1m3: "",
    ConsumptionPer1m: "",
    ConsumptionPer1t: "",
    OwnerBarcode: "",
  };

  const inputs = [
    {
      label: "Опис",
      id: "DescriptionEN",
    },
    {
      label: "Розміри",
      id: "Dimensions",
    },
    {
      label: "Довжина",
      id: "Length",
    },
    {
      label: "Щільність",
      id: "Density",
    },
    {
      label: "Вага",
      id: "WeightElement",
    },
    {
      label: "Периметр",
      id: "Perimeter",
    },
    {
      label: "Площа",
      id: "Area",
    },
    {
      label: "Об'єм",
      id: "Volume",
    },
    {
      label: "Коефіціент",
      id: "WriteOffCoefficient",
    },
    {
      label: "Витрата",
      id: "Consumption",
    },
    {
      label: "Витрата 1/m2",
      id: "ConsumptionPer1m2",
    },
    {
      label: "Витрата 1/m3",
      id: "ConsumptionPer1m3",
    },
    {
      label: "Витрата 1/m",
      id: "ConsumptionPer1m",
    },
    {
      label: "Витрата 1/t",
      id: "ConsumptionPer1t",
    },
    {
      label: "Власний код",
      id: "OwnerBarcode",
    },
  ];

  // Схема валідації
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
      .typeError("Введіть число")
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

  // Відповідає за оновлення стану (значення в інпуті)
  const handleChange = () => {
    // const { name, value } = event.target;

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
    //     setDescriptionEN(value);
    //     break;
    //   case "priceUAH":
    //     setPriceUAH(value);
    //     break;
    //   case "unit":
    //     setUnit(value);
    //     break;
    //   case "dimensions":
    //     setDimensions(value);
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
    //     setVolume(value);
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
    //     setConsumptionPer1m1(value);
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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newElement = {
  //     ParentElementId,
  //     DescriptionUA: descriptionUA,
  //     DescriptionEN: descriptionEN,
  //     PriceUAH: priceUAH,
  //     Unit: unit,
  //     Dimensions: dimensions,
  //     Length: length,
  //     Width: width,
  //     Height: height,
  //     Density: density,
  //     WeightElement: weightElement,
  //     Perimeter: perimeter,
  //     Area: area,
  //     Volume: volume,
  //     WriteOffCoefficient: writeOffCoefficient,
  //     Consumption: consumption,
  //     ConsumptionPer1m2: consumptionPer1m2,
  //     ConsumptionPer1m3: consumptionPer1m3,
  //     ConsumptionPer1m: consumptionPer1m1,
  //     ConsumptionPer1t: consumptionPer1t,
  //     OwnerBarcode: ownerBarcode,
  //   };
  //   console.log(newElement);

  //   // Запит в базу даних
  //   async function addNewElement(data) {
  //     setIsLoading(true);
  //     try {
  //       const response = await addElement(data);
  //       console.log(response.data);
  //     } catch {
  //       toast.error("Не вдалось додати матеріал", {
  //         autoClose: false,
  //       });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   // викликаємо функцію
  //   addNewElement(newElement);

  //   // Очистка форми
  //   setDescriptionUA("");
  //   setDescriptionEN("");
  //   setPriceUAH("");
  //   setUnit("");
  //   setDimensions("");
  //   setLength("");
  //   setWidth("");
  //   setHeight("");
  //   setDensity("");
  //   setWeightElement("");
  //   setPerimeter("");
  //   setArea("");
  //   setVolume("");
  //   setWriteOffCoefficient("");
  //   setConsumption("");
  //   setConsumptionPer1m2("");
  //   setConsumptionPer1m3("");
  //   setConsumptionPer1m1("");
  //   setConsumptionPer1t("");
  //   setOwnerBarcode("");
  // };
  const handleSubmit = (values, actions) => {
    // const { resetForm } = actions;
    // Передача даних в контекст (глобальний стейт)
    // onRegister(values);
    // Очистка форми
    // resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addElementSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <StyledForm onSubmit={handleSubmit}>
            <CloseButton onClick={onClose} icon={CgClose}></CloseButton>

            <DescriptionWrapper>
              <label htmlFor="DescriptionUA">Опис</label>
              <TextArea
                as="textarea" // Вказуємо, що це textarea
                ref={textAreaRef}
                name="DescriptionUA"
                id="DescriptionUA"
                placeholder="Введіть опис"
                type="text"
                onChange={handleChange}
                bordercolor={validationColor(
                  props.errors.DescriptionUA,
                  props.values.DescriptionUA,
                  "rgb(0, 0, 0)"
                )}
              />
              <ErrorMessage
                name="DescriptionUA"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </DescriptionWrapper>
            <InputGroup>
              <InputWrapper>
                <label htmlFor="PriseUAH">Price</label>
                <Input
                  type="text"
                  placeholder="Ціна"
                  name="PriceUAH"
                  id="PriceUAH"
                  bordercolor={validationColor(
                    props.errors.PriceUAH,
                    props.values.PriceUAH,
                    "rgb(26, 50, 0)"
                  )}
                />
                <ErrorMessage
                  name="PriceUAH"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </InputWrapper>

              {inputs.map(({ id, label }) => (
                <InputWrapper key={id}>
                  <label htmlFor={id}>{label}</label>
                  <Input
                    type="text"
                    placeholder={id}
                    name={id}
                    id={id}
                    bordercolor={validationColor(
                      props.errors[{ id }],
                      props.values[{ id }]
                    )}
                  />
                  <ErrorMessage
                    name={id}
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </InputWrapper>
              ))}
            </InputGroup>
            <Button type="submit">Додати</Button>
          </StyledForm>
        )}
      </Formik>
      {/* {isLoading && <BarLoader color="#125b56" width="100%" />} */}
    </>
  );
};

export default AddForm;
