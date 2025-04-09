export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "25px", // Мінімальна висота всього контролу
    height: "25px", // Фіксована висота
    borderColor: state.isFocused ? "#2684FF" : "#ccc",
    boxShadow: state.isFocused ? "0 0 0 1px #2684FF" : "none",
    "&:hover": {
      borderColor: "#2684FF",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "25px",
    padding: "0 6px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "25px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "4px",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: "4px",
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    padding: "6px 10px",
  }),
};
