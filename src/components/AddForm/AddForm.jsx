import React, { useState } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button, IconButton } from "../../components/Button/Button";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import {
  InputWrapper,
  StyledForm,
  TextArea,
  InputGroup,
  Input,
  DescriptionWrapper,
  ErrorMessageStyled,
  Select,
} from "./AddForm.styled";
// import { toast } from "react-toastify";
// import { addElement } from "../../services/api";
// import { BarLoader } from "react-spinners";

const AddForm = ({ onClose, id, createMaterial }) => {
  // const textAreaRef = useRef(null); // отримуємо елемент textarea щоб зчитати позицію скролу в textarea

  const [additionalFields, setAdditionalFields] = useState(false);

  const unitTypes = ["m", "m2", "m3", "t", "kg", "pcs."];

  // Показує апо приховує додаткові параметри
  function toggleAdditionalFields() {
    setAdditionalFields(!additionalFields);
  }

  // Початкові значення
  const initialValues = {
    DescriptionUA: "",
    DescriptionEN: "",
    PriceUAH: "",
    Unit: "",
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
    Comment: "",
  };

  // Масив для рендеру інпутів
  const inputs = [
    {
      label: "Довжина, мм",
      id: "Length",
    },
    {
      label: "Ширина, мм",
      id: "Width",
    },
    {
      label: "Висота, мм",
      id: "Height",
    },
    {
      label: "Щільність, кг/м3",
      id: "Density",
    },
    {
      label: "Вага, кг",
      id: "WeightElement",
    },
    {
      label: "Периметр, мм",
      id: "Perimeter",
    },
    {
      label: "Площа, м2",
      id: "Area",
    },
    {
      label: "Об'єм, м3",
      id: "Volume",
    },
    {
      label: "Коефіціент витрати",
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
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис")
      .required("Опис обов'язкове поле"),
    DescriptionEN: yup
      .string()
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис"),
    PriceUAH: yup
      .number()
      .typeError("Введіть число")
      .positive()
      .required("Ціна обов'язкове поле"),
    Unit: yup
      .string()
      .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
      .required("Одиниці виміру обов'язкове поле"),
    Length: yup.number().typeError("Введіть число").positive(),
    Width: yup.number().typeError("Введіть число").positive(),
    Height: yup.number().typeError("Введіть число").positive(),
    Density: yup.number().typeError("Введіть число").positive(),
    WeightElement: yup.number().typeError("Введіть число").positive(),
    Perimeter: yup.number().typeError("Введіть число").positive(),
    Area: yup.number().typeError("Введіть число").positive(),
    Volume: yup.number().typeError("Введіть число").positive(),
    WriteOffCoefficient: yup.number().typeError("Введіть число").positive(),
    Consumption: yup.number().typeError("Введіть число").positive(),
    ConsumptionPer1m2: yup.number().typeError("Введіть число").positive(),
    ConsumptionPer1m3: yup.number().typeError("Введіть число").positive(),
    ConsumptionPer1m: yup.number().typeError("Введіть число").positive(),
    ConsumptionPer1t: yup.number().typeError("Введіть число").positive(),
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис"),
  });

  const handleSubmit = (values, actions) => {
    // console.log("values: ", values);
    // console.log("notEmptyInputs:");
    const { resetForm } = actions;

    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    );
    // console.log("filteredValues: ", filteredValues);

    const additionalElement = {
      ParentElementId: id,
      ...filteredValues,
    };

    // console.log("additionalElement: ", additionalElement);
    createMaterial(additionalElement);

    // Очистка форми
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addElementSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <StyledForm>
            <CloseButton onClick={onClose} icon={CgClose}></CloseButton>

            <DescriptionWrapper>
              <label htmlFor="DescriptionUA">Опис</label>
              <TextArea
                name="DescriptionUA"
                id="DescriptionUA"
                placeholder="Введіть опис українською мовою"
                type="text"
                bordercolor={validationColor(
                  props.errors.DescriptionUA,
                  props.values.DescriptionUA
                )}
              />
              <ErrorMessage
                name="DescriptionUA"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </DescriptionWrapper>
            <InputGroup>
              <InputWrapper>
                <label htmlFor="PriseUAH">Ціна в грн.</label>
                <Input
                  type="text"
                  placeholder="Ціна"
                  name="PriceUAH"
                  id="PriceUAH"
                  bordercolor={validationColor(
                    props.errors.PriceUAH,
                    props.values.PriceUAH
                  )}
                />
                <ErrorMessage
                  name="PriceUAH"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="Unit">Одиниці виміру</label>
                <Field
                  as={Select}
                  name="Unit"
                  bordercolor={validationColor(
                    props.errors.Unit,
                    props.values.Unit
                  )}
                >
                  <option value="" disabled hidden>
                    Оберіть одиницю виміру
                  </option>
                  <option value="pcs.">Штука</option>
                  <option value="m">Метр погонний</option>
                  <option value="m2">Метр квадратний</option>
                  <option value="m3">Метр кубічний</option>
                  <option value="t">Тона</option>
                  <option value="kg">Кілограм</option>
                </Field>

                <ErrorMessage
                  name="Unit"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </InputWrapper>
            </InputGroup>
            <IconButton
              type="button"
              visibility="visible"
              variant="neutral"
              tooltip={"Додаткові властивості"}
              icon={
                additionalFields
                  ? IoMdArrowDropupCircle
                  : IoMdArrowDropdownCircle
              }
              onClick={() => toggleAdditionalFields()}
            ></IconButton>
            {additionalFields && (
              <>
                <DescriptionWrapper>
                  <label htmlFor="DescriptionEN">Опис</label>
                  <TextArea
                    name="DescriptionEN"
                    id="DescriptionEN"
                    placeholder="Введіть опис англійською мовою"
                    type="text"
                    bordercolor={validationColor(
                      props.errors.DescriptionEN,
                      props.values.DescriptionEN
                    )}
                  />
                  <ErrorMessage
                    name="DescriptionEN"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </DescriptionWrapper>
                <InputGroup>
                  {inputs.map(({ id, label }) => (
                    <InputWrapper key={id}>
                      <label htmlFor={id}>{label}</label>
                      <Input
                        type="text"
                        placeholder={label}
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
                <DescriptionWrapper>
                  <label htmlFor="Comment">Коментар</label>
                  <TextArea
                    name="Comment"
                    id="Comment"
                    placeholder="Введіть коментар"
                    type="text"
                    bordercolor={validationColor(
                      props.errors.Comment,
                      props.values.Comment
                    )}
                  />
                  <ErrorMessage
                    name="Comment"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </DescriptionWrapper>
              </>
            )}
            <Button type="submit">Додати</Button>
          </StyledForm>
        )}
      </Formik>
      {/* {isLoading && <BarLoader color="#125b56" width="100%" />} */}
    </>
  );
};

export default AddForm;
