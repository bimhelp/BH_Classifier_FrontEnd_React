import React, { useState, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button, IconButton } from "../Button/Button";
import { CloseButton } from "../Button/Button";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  InputWrapper,
  StyledForm,
  TextArea,
  Input,
  DescriptionWrapper,
  ErrorMessageStyled,
  Select,
  ButtonWrapper,
  FormTitle,
} from "./EditServiceForm.styled";

const EditServiceForm = ({ element, onClose, id, edit }) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  const unitTypes = ["category", "m", "m2", "m3", "t", "kg", "pcs."];
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

  // Початкові значення
  const initialValues = {
    DescriptionUA: getFieldValue(element, "DescriptionUA"),
    DescriptionEN: getFieldValue(element, "DescriptionEN"),
    Price: getFieldValue(element, "Price"),
    Currency: getFieldValue(element, "Currency"),
    Unit: getFieldValue(element, "Unit"),
    OwnerBarcode: getFieldValue(element, "OwnerBarcode"),
    Comment: getFieldValue(element, "Comment"),
    Origin: getFieldValue(element, "Origin"),
    Code: getFieldValue(element, "Code"),
    ParentElementId: getFieldValue(element, "ParentElementId"),
  };
  // Схема валідації
  const addServiceSchema = yup.object().shape({
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
      )
      .required("Код обов'язкове поле"),
    Price: yup.number().typeError("Введіть число").positive(),
    Currency: yup.string().oneOf(currencyType, "Недопустима валюта"),
    Unit: yup
      .string()
      .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
      .required("Оберіть одиниці виміру"),
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
    // formik метод очистки форми
    const { resetForm } = actions;

    // перебирає ключі отримані із форми і перевіряє чи є вони у об'єкта який редагується, якщо немає то додає
    const changedValues = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== initialValues[key]) {
        acc[key] = values[key];
      }
      return acc;
    }, {});
    // console.log("changedValues: ", changedValues);

    // Відправка даних у верхній компонент
    edit(id, changedValues);
    actions.setSubmitting(false); // Позначити, що обробка завершена

    // Очистка форми
    resetForm();
    onClose();
  };

  return (
    <>
      <FormTitle>Редагувати послугу: {element.DescriptionUA}</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addServiceSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <StyledForm>
            <CloseButton onClick={onClose} icon={CgClose}></CloseButton>
            <DescriptionWrapper>
              <label htmlFor="DescriptionUA">Опис UA</label>
              <TextArea
                autoFocus={true}
                name="DescriptionUA"
                id="DescriptionUA"
                placeholder="Введість опис українською мовою"
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

            <DescriptionWrapper>
              <label htmlFor="DescriptionEN">Опис EN</label>
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
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </DescriptionWrapper>
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
              <label htmlFor="Currency">Валюта</label>
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

              <ErrorMessage
                name="Currency"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="PriseUAH">Ціна</label>
              <Input
                type="text"
                placeholder="Ціна"
                name="Price"
                id="Price"
                bordercolor={validationColor(
                  props.errors.Price,
                  props.values.Price
                )}
              />
              <ErrorMessage
                name="Price"
                render={(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
              />
            </InputWrapper>
            {role === "admin" && (
              <div>
                <label htmlFor="Origin">cpv</label>
                <Input type="checkbox" name="Origin" id="Origin"></Input>
              </div>
            )}
            <ButtonWrapper>
              <IconButton
                type="button"
                visibility="visible"
                variant="dark"
                tooltip={"Додаткові властивості"}
                iconSize="40px"
                icon={
                  additionalFields ? MdKeyboardArrowUp : MdKeyboardArrowDown
                }
                onClick={() => toggleAdditionalFields()}
              ></IconButton>
            </ButtonWrapper>
            {additionalFields && (
              <>
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
                  <label htmlFor="OwnerBarcode">Власний код</label>
                  <Input
                    type="text"
                    placeholder="Власний код"
                    name="OwnerBarcode"
                    id="OwnerBarcode"
                    bordercolor={validationColor(
                      props.errors.OwnerBarcode,
                      props.values.OwnerBarcode
                    )}
                  />
                  <ErrorMessage
                    name="Price"
                    render={(msg) => (
                      <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                    )}
                  />
                </InputWrapper>
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
    </>
  );
};

export default EditServiceForm;
