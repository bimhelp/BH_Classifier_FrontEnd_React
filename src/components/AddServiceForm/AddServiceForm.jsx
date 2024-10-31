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
} from "./AddServiceForm.styled";
import UnitSelect from "../UnitSelect/UnitSelect";

const AddServiceForm = ({ onClose, id, create }) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  const currencyType = ["UAH", "EUR", "USD"];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reset, setReset] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");

  const { role } = useContext(context);

  // Початкові значення
  const initialValues = {
    DescriptionUA: "",
    DescriptionEN: "",
    Price: "",
    Currency: "UAH",
    Url: "",
    Unit: "",
    OwnerBarcode: "",
    Comment: "",
    Origin: false,
    Code: "",
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
    Url: yup
      .string()
      .min(3, "Занадто короткий url")
      .max(500, "Занадто довкий url"),
    Code: yup
      .string()
      .matches(
        /^\d{8}-\d$/,
        "Код повине бути довжиною 8 цифр, дефіс, 1 цифра, наприклад 47000000-6"
      ),
    Price: yup.number().typeError("Введіть число").positive(),
    Currency: yup.string().oneOf(currencyType, "Недопустима валюта"),

    // Закоментовано тому що використовується інший тип селекту
    // Unit: yup
    //   .string()
    //   .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
    //   .required("Оберіть одиниці виміру"),
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто короткий опис")
      .max(500, "Занадто довкий опис"),
  });

  const handleSubmit = async (values, actions) => {
    // formik метод очистки форми
    const { resetForm } = actions;

    // фільтрація заповнених полів
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    );

    const additionalElement = {
      ParentElementId: id,
      Unit: selectedUnit,
      ...filteredValues,
    };
    try {
      await create(additionalElement);
      resetForm();
      setReset(true);
      onClose();
    } catch (error) {
      console.error("Error creating material:", error);
    } finally {
    }
  };

  // Показує або приховує додаткові параметри
  function toggleAdditionalFields() {
    setAdditionalFields(!additionalFields);
  }

  // відкриття модалки
  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const onUnitSelect = (data) => {
    if (data) {
      setSelectedUnit(data.value);
    }
    return;
  };

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
                as={UnitSelect}
                name="Unit"
                onSelect={onUnitSelect}
                variant="add"
                reset={reset}
              ></Field>
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
                {role === "admin" ? (
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
                ) : (
                  <Button type="button" onClick={toggleModal}>
                    Вибтари категорію
                  </Button>
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
