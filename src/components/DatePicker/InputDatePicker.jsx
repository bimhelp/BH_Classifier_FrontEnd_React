import React from "react";
import { useField } from "formik";
import { ErrorMessageStyled } from "../CommonFormStyles/CommonFormStyles.styled";
import DatePicker from "react-datepicker";

const InputDatePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <div>
      <DatePicker
        selected={field.value}
        onChange={(date) => setValue(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Оберіть дату"
      />
      {meta.touched && meta.error && (
        <ErrorMessageStyled>{meta.error}</ErrorMessageStyled>
      )}
    </div>
  );
};

export default InputDatePicker;
