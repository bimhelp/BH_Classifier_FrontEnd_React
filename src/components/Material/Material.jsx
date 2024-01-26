import React from "react";
import {
  MaterialWrapper,
  MaterialCode,
  Description,
  MaterialPrice,
  MaterialUnit,
  Extended,
  HilightDescription,
} from "./Material.styled";

import { hiLight } from "../../services";

const Material = ({
  material: { Code, DescriptionUA, Price, Unit },
  query,
}) => {
  return (
    <MaterialWrapper>
      <MaterialCode> {Code}</MaterialCode>
      <div>
        {query ? (
          <HilightDescription>
            {hiLight(query, DescriptionUA)}
          </HilightDescription>
        ) : (
          <Description>{DescriptionUA}</Description>
        )}
        {/* <Description>{DescriptionUA}</Description> */}
        <Extended>
          {Price && <MaterialPrice> {Price} &#8372;</MaterialPrice>}
          {Unit && <MaterialUnit> {Unit} </MaterialUnit>}
        </Extended>
      </div>
    </MaterialWrapper>
  );
};

export default Material;
