import React from "react";
import PropTypes from "prop-types";
import { MaterialPrice } from "./PriceDisplay.styled";

const currencyType = ["UAH", "EUR", "USD"];
// const currencySymbols = {
//   UAH: "₴",
//   EUR: "€",
//   USD: "$",
// };

// тут додаємо ролі які повинні бачити ціну
const PriceDisplay = ({ price, currency = "UAH", role, userId, owner }) => {
  const hasAccess = role === "admin" || role === "designer" || userId === owner;

  if (!hasAccess) return null; // Якщо немає доступу, повертаємо null

  if (!price) return null; // Якщо немає ціни, теж нічого не рендеримо

  // const currencySymbol = currencySymbols[currency] || currency; // Якщо символа немає, відображаємо код валюти
  return (
    <MaterialPrice>
      Ціна: {price} {currency}
    </MaterialPrice>
  );
};

PriceDisplay.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.oneOf(currencyType),
  role: PropTypes.string,
  userId: PropTypes.string,
  owner: PropTypes.string,
};

PriceDisplay.defaultProps = {
  price: null,
  currency: "UAH",
  role: "guest",
  userId: null,
  owner: null,
};

export default PriceDisplay;
