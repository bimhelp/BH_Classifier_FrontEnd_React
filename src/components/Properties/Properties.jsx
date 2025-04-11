import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { PropertyList, Property } from "./Properties.styled";
import PriceDisplay from "../PriceDisplay/PriceDisplay";
import UnitDisplay from "../UnitDisplay/UnitDisplay";
const Properties = ({
  element: {
    owner,
    Price,
    Currency,
    Unit,
    Url = "",
    Length = "",
    Height = "",
    Width = "",
    Density = "",
    WeightElement = "",
    AssortmentWeight = "",
    Perimeter = "",
    Area = "",
    Volume = "",
    OwnerBarcode = "",
    Comment = "",
  },
}) => {
  const { role, userId } = useContext(context);

  return (
    <div>
      <PropertyList>
        <UnitDisplay unit={Unit} />

        <PriceDisplay
          price={Price}
          currency={Currency}
          role={role}
          userId={userId}
          owner={owner}
        />
        {Length !== "" && <Property>Довжина: {Length}м</Property>}
        {Height !== "" && <Property>Висота: {Height}м</Property>}
        {Width !== "" && <Property>Ширина: {Width}м</Property>}
        {Density !== "" && <Property>Щільність: {Density}кг/м³</Property>}

        {WeightElement !== "" && <Property>Вага: {WeightElement}кг</Property>}
        {AssortmentWeight !== "" && (
          <Property>Маса 1 метра: {AssortmentWeight}кг</Property>
        )}
        {Perimeter !== "" && <Property>Периметр: {Perimeter}мм</Property>}
        {Area !== "" && <Property>Площа: {Area}м²</Property>}
        {Volume !== "" && <Property>Об'єм: {Volume}м³</Property>}

        {OwnerBarcode !== "" && (
          <Property>Власний код: {OwnerBarcode}</Property>
        )}

        {Url !== "" && <Property>Посилання: {Url}</Property>}
        {Comment !== "" && <Property>Коментар: {Comment}</Property>}
      </PropertyList>
    </div>
  );
};

export default Properties;
