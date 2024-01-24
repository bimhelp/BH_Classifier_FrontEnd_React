import React from "react";
import {
  MaterialWrapper,
  MaterialCode,
  Description,
  MaterialPrice,
  MaterialUnit,
  Extended,
} from "./Material.styled";

const Material = ({ material: { Code, DescriptionUA, Price, Unit } }) => {
  return (
    <MaterialWrapper>
      <MaterialCode> {Code}</MaterialCode>
      <div>
        <Description>{DescriptionUA}</Description>
        <Extended>
          {Price && <MaterialPrice>Price: {Price} &#8372;</MaterialPrice>}
          {Unit && <MaterialUnit> {Unit} </MaterialUnit>}
        </Extended>
      </div>
    </MaterialWrapper>
  );
};

export default Material;
