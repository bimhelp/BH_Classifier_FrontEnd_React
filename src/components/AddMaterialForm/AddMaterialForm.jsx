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
import { PulseLoader } from "react-spinners";

import UnitSelect from "../UnitSelect/UnitSelect";
import {
  StyledForm,
  FormTitle,
  InputGroup,
  InputWrapper,
  MessageVrapper,
  Input,
  TextArea,
  StyledSelect,
  ErrorMessageStyled,
  ButtonWrapper,
  ShortInputWrapper,
} from "../CommonFormStyles/CommonFormStyles.styled";

const AddMaterialForm = ({ onClose, id, create }) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [reset, setReset] = useState(false);
  const { role } = useContext(context);
  const [isLoading, setIsLoading] = useState(false);

  // const unitTypes = ["category", "m", "m2", "m3", "t", "kg", "pcs."];
  const currencyType = ["UAH", "EUR", "USD"];

  // Початкові значення
  const initialValues = {
    DescriptionUA: "",
    DescriptionEN: "",
    Code: "",
    Price: "",
    Currency: "UAH",
    Unit: "none",
    Length: "",
    Width: "",
    Height: "",
    Density: "",
    WeightElement: "",
    AssortmentWeight: "",
    Perimeter: "",
    Area: "",
    Volume: "",
    OwnerBarcode: "",
    Comment: "",
    Origin: false,
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
      label: "Асортиментна вага, кг",
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
  const addMaterialSchema = yup.object().shape({
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
    Price: yup.number().typeError("Введіть число").positive(),
    Url: yup
      .string()
      .min(3, "Занадто коротке посилання")
      .max(500, "Занадто довге посилання"),
    Currency: yup.string().oneOf(currencyType, "Недопустима валюта"),
    // Закоментовано тому що використовується інший тип селекту
    // Unit: yup?/
    //   .string()
    //   .oneOf(unitTypes, "Недопустимий тип одиниці виміру")
    //   .required("Оберіть одиниці виміру"),
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
    OwnerBarcode: yup
      .string()
      .min(3, "Занадто короткий код")
      .max(500, "Занадто довкий код"),
  });

  // Показує або приховує додаткові параметри
  function toggleAdditionalFields() {
    setAdditionalFields(!additionalFields);
  }

  // Очистка react input
  // const clearSelect = () => {};

  const handleSubmit = async (values, actions) => {
    // formik метод очистки форми
    const { resetForm } = actions;
    setIsLoading(true);

    // фільтрація заповнених полів
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    );

    const additionalElement = {
      ParentElementId: id,
      ...filteredValues,
      Unit: selectedUnit,
    };
    try {
      setIsLoading(true);
      await create(additionalElement);
      resetForm();
      setReset(true);
      onClose();
    } catch (error) {
      console.error("Error creating material:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onUnitSelect = (data) => {
    if (data) {
      setSelectedUnit(data.value);
      console.log("data.value: ", data.value);
    }
    return;
  };

  return (
    <>
      <FormTitle>Створити матеріал:</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addMaterialSchema}
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
              <MessageVrapper>
                <label htmlFor="DescriptionEN">Опис EN</label>
                <ErrorMessage
                  name="DescriptionEN"
                  render={(msg) => (
                    <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                  )}
                />
              </MessageVrapper>
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
                  as={StyledSelect}
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
                  <label htmlFor="Price">Ціна</label>
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
                    props.errors.Price,
                    props.values.Price
                  )}
                />
              </InputWrapper>
              <InputWrapper>
                <MessageVrapper>
                  <label htmlFor="Url">Посилання</label>{" "}
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
              <>
                <div>
                  <label htmlFor="Origin">Це оригінальний код cpv</label>
                  <Input type="checkbox" name="Origin" id="Origin"></Input>
                </div>
                <div>
                  <label htmlFor="Category">Це категорія</label>
                  <Input type="checkbox" name="Category" id="Category"></Input>
                </div>
              </>
            )}
            <ButtonWrapper>
              <IconButton
                type="button"
                visibility="visible"
                variant="dark"
                tooltip={"Додаткові властивості"}
                iconSize="40px"
                width="100%"
                icon={
                  additionalFields ? MdKeyboardArrowUp : MdKeyboardArrowDown
                }
                onClick={() => toggleAdditionalFields()}
              ></IconButton>
            </ButtonWrapper>
            {additionalFields && (
              <>
                {role === "admin" && (
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
                )}

                <InputGroup>
                  {inputs.map(({ id, label }) => (
                    <ShortInputWrapper key={id}>
                      <MessageVrapper>
                        <label htmlFor={id}>{label}</label>
                        <ErrorMessage
                          name={id}
                          render={(msg) => (
                            <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                          )}
                        />
                      </MessageVrapper>
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
                    </ShortInputWrapper>
                  ))}
                </InputGroup>
                <ShortInputWrapper>
                  <MessageVrapper>
                    <label htmlFor="Comment">Коментар</label>
                    <ErrorMessage
                      name="Comment"
                      render={(msg) => (
                        <ErrorMessageStyled>{msg}</ErrorMessageStyled>
                      )}
                    />
                  </MessageVrapper>
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
                </ShortInputWrapper>
              </>
            )}

            <ButtonWrapper>
              <Button
                type="submit"
                disabled={Object.keys(props.errors).length > 0}
                isLoading={true}
              >
                Створити
                {isLoading && <PulseLoader color="#ffffff" size={5} />}
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
      {/* {isLoading && <BarLoader color="#125b56" width="100%" />} */}
    </>
  );
};

export default AddMaterialForm;
