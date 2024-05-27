import React, { useState, useContext } from "react";
import { authContext as context } from "../../context/authContext";
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
  ButtonWrapper,
  FormTitle,
} from "./EditMaterialForm.styled";

const EditMaterialForm = ({ element, onClose, id, edit }) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  const unitTypes = ["category", "m", "m2", "m3", "t", "kg", "pcs."];
  const { role } = useContext(context);

  // Функція, що перевіряє значення на undefined і встановлює пустий рядок в разі потреби
  const getFieldValue = (obj, fieldName) => {
    if (
      !obj ||
      typeof obj[fieldName] === "undefined" ||
      obj[fieldName] === null
    ) {
      return "";
    } else {
      return obj[fieldName];
    }
  };

  // Створення об'єкта initialValues на основі element з пустими значеннями для undefined полів
  const initialValues = {
    DescriptionUA: getFieldValue(element, "DescriptionUA"),
    DescriptionEN: getFieldValue(element, "DescriptionEN"),
    Code: getFieldValue(element, "Code"),
    PriceUAH: getFieldValue(element, "PriceUAH"),
    Unit: getFieldValue(element, "Unit"),
    Length: getFieldValue(element, "Length"),
    Width: getFieldValue(element, "Width"),
    Height: getFieldValue(element, "Height"),
    Density: getFieldValue(element, "Density"),
    WeightElement: getFieldValue(element, "WeightElement"),
    Perimeter: getFieldValue(element, "Perimeter"),
    Area: getFieldValue(element, "Area"),
    Volume: getFieldValue(element, "Volume"),
    WriteOffCoefficient: getFieldValue(element, "WriteOffCoefficient"),
    Consumption: getFieldValue(element, "Consumption"),
    ConsumptionPer1m2: getFieldValue(element, "ConsumptionPer1m2"),
    ConsumptionPer1m3: getFieldValue(element, "ConsumptionPer1m3"),
    ConsumptionPer1m: getFieldValue(element, "ConsumptionPer1m"),
    ConsumptionPer1t: getFieldValue(element, "ConsumptionPer1t"),
    OwnerBarcode: getFieldValue(element, "OwnerBarcode"),
    Comment: getFieldValue(element, "Comment"),
    Origin: getFieldValue(element, "Origin"),
    ParentElementId: getFieldValue(element, "ParentElementId"),
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
    Code: yup
      .string()
      .matches(
        /^\d{8}-\d$/,
        "Код повине бути довжиною 8 цифр, дефіс, 1 цифра, наприклад 47000000-6"
      ),
    PriceUAH: yup.number().typeError("Введіть число").positive(),
    Unit: yup
      .string()
      .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
      .required("Оберіть одиниці виміру"),
    Length: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним")
      .integer("Число повинне бути цілим"),
    Width: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним")
      .integer("Число повинне бути цілим"),
    Height: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним")
      .integer("Число повинне бути цілим"),
    Density: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    WeightElement: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    Perimeter: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним")
      .integer("Число повинне бути цілим"),
    Area: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    Volume: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    WriteOffCoefficient: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    Consumption: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    ConsumptionPer1m2: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    ConsumptionPer1m3: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    ConsumptionPer1m: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    ConsumptionPer1t: yup
      .number()
      .typeError("Введіть число")
      .positive("Число повинне бути додатним"),
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис"),
  });

  // Показує апо приховує додаткові параметри
  function toggleAdditionalFields() {
    setAdditionalFields(!additionalFields);
  }

  const handleSubmit = (values, actions) => {
    const { resetForm } = actions;

    // перебирає ключі отримані із форми і перевіряє чи є вони у об'єкта який редагується, якщо немає то додає
    const changedValues = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== initialValues[key]) {
        acc[key] = values[key];
      }
      return acc;
    }, {});

    // Відправка даних у верхній компонент
    edit(id, changedValues);
    actions.setSubmitting(false); // Позначити, що обробка завершена

    // Очистка форми
    resetForm();
    onClose();
  };

  return (
    <>
      <FormTitle>Редагувати матеріал: {element.DescriptionUA}</FormTitle>
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
                autoFocus={true}
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
            {role === "admin" && (
              <>
                <InputWrapper>
                  <label htmlFor="Code">Код</label>
                  <Input
                    type="text"
                    placeholder="Код"
                    name="Code"
                    id="Code"
                    bordercolor={validationColor(
                      props.errors.Code,
                      props.values.Code
                    )}
                  />
                  <ErrorMessage
                    name="Code"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="ParentElementId">Код Категорії</label>
                  <Input
                    type="text"
                    placeholder="Код Категорії"
                    name="ParentElementId"
                    id="ParentElementId"
                    disabled={element.CodeParentElement === "materials"}
                    bordercolor={validationColor(
                      props.errors.Code,
                      props.values.Code
                    )}
                  />
                  <ErrorMessage
                    name="ParentElementId"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </InputWrapper>
              </>
            )}
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
                <option value="category">Категорія</option>
                <option value="pcs.">Штука</option>
                <option value="m">Метр погонний</option>
                <option value="m2">Метр квадратний</option>
                <option value="m3">Метр кубічний</option>
                <option value="t">Тона</option>
                <option value="kg">Кілограм</option>
              </Field>

              <ErrorMessage
                name="Unit"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
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
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            {role === "admin" && (
              <div>
                <label htmlFor="Origin">cpv</label>
                <Input type="checkbox" name="Origin" id="Origin"></Input>
              </div>
            )}
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
                          props.errors[id],
                          props.values[id]
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

            <ButtonWrapper>
              <Button
                type="submit"
                disabled={Object.keys(props.errors).length > 0}
              >
                Редагувати
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
      {/* {isLoading && <BarLoader color="#125b56" width="100%" />} */}
    </>
  );
};

export default EditMaterialForm;
