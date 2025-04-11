import React, { useState, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button, IconButton } from "../../components/Button/Button";
import { CloseButton } from "../../components/Button/Button";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  StyledForm,
  TextArea,
  InputGroup,
  InputWrapper,
  ShortInputWrapper,
  Input,
  ErrorMessageStyled,
  Select,
  ButtonWrapper,
  FormTitle,
  MessageVrapper,
} from "./EditMaterialForm.styled";

const EditMaterialForm = ({ element, onClose, id, edit }) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  const unitTypes = ["none", "m", "m2", "m3", "t", "kg", "pcs."];
  const currencyType = ["UAH", "EUR", "USD"];
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
    Price: getFieldValue(element, "Price"),
    Currency: getFieldValue(element, "Currency"),
    Url: getFieldValue(element, "Url"),
    Unit: getFieldValue(element, "Unit"),
    Length: getFieldValue(element, "Length"),
    Width: getFieldValue(element, "Width"),
    Height: getFieldValue(element, "Height"),
    Density: getFieldValue(element, "Density"),
    WeightElement: getFieldValue(element, "WeightElement"),
    AssortmentWeight: getFieldValue(element, "AssortmentWeight"),
    Perimeter: getFieldValue(element, "Perimeter"),
    Area: getFieldValue(element, "Area"),
    Volume: getFieldValue(element, "Volume"),
    Comment: getFieldValue(element, "Comment"),
    Origin: getFieldValue(element, "Origin"),
    Category: getFieldValue(element, "Category"),
    ParentElementId: getFieldValue(element, "ParentElementId"),
    // Витрата
    // WriteOffCoefficient: getFieldValue(element, "WriteOffCoefficient"),
    // Consumption: getFieldValue(element, "Consumption"),
    // ConsumptionPer1m2: getFieldValue(element, "ConsumptionPer1m2"),
    // ConsumptionPer1m3: getFieldValue(element, "ConsumptionPer1m3"),
    // ConsumptionPer1m: getFieldValue(element, "ConsumptionPer1m"),
    // ConsumptionPer1t: getFieldValue(element, "ConsumptionPer1t"),
    // OwnerBarcode: getFieldValue(element, "OwnerBarcode"),
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
      label: "Маса 1 метра, кг",
      id: "AssortmentWeight",
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
    // .required("Код обов'язкове поле"),
    Price: yup.number().typeError("Введіть число").positive(),
    Currency: yup.string().oneOf(currencyType, "Недопустима валюта"),
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
    AssortmentWeight: yup
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
    //
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис"),
  });

  // Показує або приховує додаткові параметри
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

    // Передаємо обов'язкові поля
    // Перевірка та додавання ParentElementId, якщо його немає в changedValues
    if (!changedValues.hasOwnProperty("ParentElementId")) {
      changedValues.ParentElementId = initialValues.ParentElementId;
    }
    if (!changedValues.hasOwnProperty("Currency")) {
      changedValues.Currency = initialValues.Currency;
    }
    if (!changedValues.hasOwnProperty("Unit")) {
      changedValues.Unit = initialValues.Unit;
    }

    console.log("changedValues: ", changedValues);

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

            <InputWrapper>
              <MessageVrapper>
                <label htmlFor="DescriptionUA">Опис UA</label>
                <ErrorMessage
                  name="DescriptionUA"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </MessageVrapper>
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
            </InputWrapper>
            <InputWrapper>
              <ErrorMessage>
                <label htmlFor="DescriptionEN">Опис EN</label>
                <ErrorMessage
                  name="DescriptionEN"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </ErrorMessage>
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
            </InputWrapper>
            <InputGroup>
              {role === "admin" && (
                <>
                  <InputWrapper>
                    <MessageVrapper>
                      <label htmlFor="Code">Код</label>
                      <ErrorMessage
                        name="Code"
                        render={(msg) => (
                          <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                        )}
                      />
                    </MessageVrapper>
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
                  </InputWrapper>
                  <InputWrapper>
                    <MessageVrapper>
                      <label htmlFor="ParentElementId">
                        Код категорії в яку переміщується
                      </label>
                      <ErrorMessage
                        name="ParentElementId"
                        render={(msg) => (
                          <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                        )}
                      />
                    </MessageVrapper>
                    <Input
                      type="text"
                      placeholder="Код категорії в яку переміщується"
                      name="ParentElementId"
                      id="ParentElementId"
                      disabled={element.CodeParentElement === "materials"}
                      bordercolor={validationColor(
                        props.errors.Code,
                        props.values.Code
                      )}
                    />
                  </InputWrapper>
                </>
              )}
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="Unit">Одиниці виміру</label>
                  <ErrorMessage
                    name="Unit"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </MessageVrapper>
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
                  {role === "admin" && (
                    <option value="none">Не визначено</option>
                  )}
                  <option value="pcs.">Штука</option>
                  <option value="m">Метр погонний</option>
                  <option value="m2">Метр квадратний</option>
                  <option value="m3">Метр кубічний</option>
                  <option value="t">Тона</option>
                  <option value="kg">Кілограм</option>
                </Field>
              </InputWrapper>
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="Currency">Валюта</label>
                  <ErrorMessage
                    name="Currency"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </MessageVrapper>
                <Field
                  as={Select}
                  name="Currency"
                  bordercolor={validationColor(
                    props.errors.Currency,
                    props.values.Currency
                  )}
                >
                  <option value="UAH">Гривня</option>
                  <option value="EUR">Євро</option>
                  <option value="USD">Долар</option>
                </Field>
              </InputWrapper>
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="Prise">Ціна</label>
                  <ErrorMessage
                    name="Price"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </MessageVrapper>
                <Input
                  type="text"
                  placeholder="Ціна"
                  name="Price"
                  id="Price"
                  bordercolor={validationColor(
                    props.errors.PriceUAH,
                    props.values.PriceUAH
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="Url">Посилання</label>
                  <ErrorMessage
                    name="Url"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </MessageVrapper>
                <Input
                  type="text"
                  placeholder="Посилання на сайт виробника"
                  name="Url"
                  id="Url"
                  bordercolor={validationColor(
                    props.errors.Url,
                    props.values.Url
                  )}
                />
              </InputWrapper>
            </InputGroup>
            {role === "admin" && (
              <div>
                <label htmlFor="Origin">Це оригінальний код cpv</label>
                <Input type="checkbox" name="Origin" id="Origin"></Input>
              </div>
            )}
            <ButtonWrapper>
              <IconButton
                type="button"
                visibility="visible"
                variant="neutral"
                tooltip={"Додаткові властивості"}
                iconSize="40px"
                icon={
                  additionalFields ? MdKeyboardArrowUp : MdKeyboardArrowDown
                }
                width="100%"
                onClick={() => toggleAdditionalFields()}
              ></IconButton>
            </ButtonWrapper>
            {additionalFields && (
              <>
                <InputGroup>
                  {inputs.map(({ id, label }) => (
                    <ShortInputWrapper key={id}>
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
                    </ShortInputWrapper>
                  ))}
                </InputGroup>
                <InputWrapper>
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
                </InputWrapper>
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
