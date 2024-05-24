import React, { useState, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { validationColor } from "../../services/utility";
import { Button, IconButton } from "../Button/Button";
import { CloseButton } from "../Button/Button";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { CgClose } from "react-icons/cg";

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
} from "./AddServiceForm.styled";

const AddServiceForm = ({ onClose, id, create }) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  const unitTypes = ["category", "m", "m2", "m3", "t", "kg", "pcs."];
  const { role } = useContext(context);

  // Початкові значення
  const initialValues = {
    DescriptionUA: "",
    DescriptionEN: "",
    PriceUAH: "",
    Unit: "",
    OwnerBarcode: "",
    Comment: "",
    origin: false,
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
    PriceUAH: yup.number().typeError("Введіть число").positive(),
    Unit: yup
      .string()
      .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
      .required("Оберіть одиниці виміру"),
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис"),
  });

  const handleSubmit = (values, actions) => {
    // formik метод очистки форми
    const { resetForm } = actions;

    // фільтрація заповнених полів
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    );

    const additionalElement = {
      ParentElementId: id,
      ...filteredValues,
    };
    create(additionalElement);
    // Очистка форми
    resetForm();
    onClose();
  };

  // Показує апо приховує додаткові параметри
  function toggleAdditionalFields() {
    setAdditionalFields(!additionalFields);
  }

  return (
    <>
      <FormTitle>Додати послугу</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addServiceSchema}
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
                <label htmlFor="origin">cpv</label>
                <Input type="checkbox" name="origin" id="origin"></Input>
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
                    name="PriceUAH"
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
                Додати
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default AddServiceForm;
