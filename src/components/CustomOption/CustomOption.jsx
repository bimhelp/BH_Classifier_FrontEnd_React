import React from "react";
import { components } from "react-select"; // Імпортування компонентів react-select
import { Code, HilightDescription } from "./CustomOption.styled";
import { hiLight } from "../../services";

// Ваш кастомний компонент для опції
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Можна додати кастомний контент тут */}
        <Code level={props.data.value.ElementNestingLevel}>
          {props.data.value.Code}
        </Code>
        {props.querry ? (
          <HilightDescription>{hiLight(props.query)}</HilightDescription>
        ) : (
          <span>{props.data.label}</span>
        )}

        {/* <span>{props.data.label}</span> */}
      </div>
    </components.Option>
  );
};

export default CustomOption;
