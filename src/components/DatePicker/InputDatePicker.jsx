import React from "react";
import { useField } from "formik";
import { ErrorMessageStyled } from "../CommonFormStyles/CommonFormStyles.styled";
import DatePicker from "react-datepicker";
import { uk } from "date-fns/locale";

const InputDatePicker = ({ name, minDate }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <div>
      <DatePicker
        showIcon
        todayButton="Сьогодні"
        toggleCalendarOnIconClick
        isClearable
        selected={field.value}
        onChange={(date) => setValue(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Оберіть дату"
        // showTimeSelect
        showYearDropdown
        locale={uk}
        minDate={minDate}
      ></DatePicker>
      {meta.touched && meta.error && (
        <ErrorMessageStyled>{meta.error}</ErrorMessageStyled>
      )}
    </div>
  );
};

export default InputDatePicker;
