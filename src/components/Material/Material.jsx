import React from "react";
import {
  MaterialWrapper,
  MaterialCode,
  Description,
  MaterialPrice,
  UserPrice,
  MaterialUnit,
  Extended,
  HilightDescription,
} from "./Material.styled";
import { checkIsString } from "../../services";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { hiLight } from "../../services";

const Material = ({
  material: { Code, DescriptionUA, Price, Unit },
  query,
  userPrice,
}) => {
  function handleClick(event) {
    if (checkIsString(event.target.textContent)) {
      // console.log(checkIsString(event.target.textContent));
      toast.info("Опис скопійовано в буфер омбіну");
    } else toast.info("Код скопійовано в буфер омбіну");
  }

  function editPrice() {
    console.log("edit price");
  }

  return (
    <MaterialWrapper onClick={(event) => handleClick(event)}>
      <CopyToClipboard text={Code}>
        <MaterialCode>{Code}</MaterialCode>
      </CopyToClipboard>

      <div>
        {query ? (
          <HilightDescription>
            {hiLight(query, DescriptionUA)}
          </HilightDescription>
        ) : (
          <CopyToClipboard text={DescriptionUA}>
            <Description>{DescriptionUA}</Description>
          </CopyToClipboard>
        )}
        <Extended>
          {Price && <MaterialPrice> {Price} &#8372;</MaterialPrice>}
          {userPrice && <UserPrice> {userPrice} &#8372;</UserPrice>}
          {userPrice && <button onClick={editPrice}>edit price</button>}
          {Unit && <MaterialUnit> {Unit} </MaterialUnit>}
        </Extended>
      </div>
    </MaterialWrapper>
  );
};

export default Material;
