import styled, { keyframes } from "styled-components";
import { setBgColor, setTreeColor } from "../../services";

export const MenuWrapper = styled.div`
  /* outline: 1px solid tomato; */
  position: absolute;
  display: flex;
  transition: opacity 0.3s ease; /* Плавна анімація зміни прозорості */
  opacity: 1; /* Початкова прозорість */
  top: 0;
  right: 0;

  @media screen and (min-width: 680px) {
    opacity: 0;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* background-color: var(--materialColorAlfa); */
  background-color: ${(props) =>
    props.isdelete
      ? props.theme.colors.atention
      : props.theme.colors.backgroundGrey};
  /* outline: 1px solid tomato; */
  margin-bottom: ${(props) => props.theme.space[2]}px;

  &:hover,
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;

    /* Зміна прозорості у ItemMenu при ховері на Card */
    & ${MenuWrapper} {
      opacity: 1; /* Нове значення прозорості */
    }
  }
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;

    /* Зміна прозорості у ItemMenu при ховері на Card */
    & ${MenuWrapper} {
      opacity: 1; /* Нове значення прозорості */
    }
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 5px;

  width: 100%;

  /* outline: 1px solid blue; */

  @media screen and (min-width: 680px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CodeWrapper = styled.div`
  position: relative;
  text-align: start;
  height: 100%;
  width: 100%;
  background-color: ${setBgColor};
  border-radius: 0 5px 5px 0px;
  justify-content: end;

  @media screen and (min-width: 680px) {
    /* display: flex; */
    width: auto;
    text-align: start;
  }
`;
export const Chain = styled.ul`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: stretch;
  gap: 2px;
  margin-bottom: 5px;
  /* flex-wrap: wrap; */
  border-radius: 0 5px 5px 0px;
  font-size: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

export const ChainLink = styled.div`
  position: relative;

  padding-left: ${(props) => props.theme.space[3]}px;
  /* padding-right: ${(props) => props.theme.space[3]}px; */

  background-color: ${setTreeColor};

  display: flex;
  gap: 5px;
  align-items: center;

  border-radius: 0 5px 5px 0px;
  text-align: left;
  color: ${(props) => props.theme.colors.textWhiteColor};
  font-size: 13px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  & p {
    max-width: 100px;
    white-space: nowrap; /* Важливо для обрізання тексту */
    overflow: hidden; /* Важливо для обрізання тексту */
    text-overflow: ellipsis; /* Важливо для додавання трьох крапок */
    margin: 0; /* Додаємо margin, щоб текст правильно обрізався */
    padding-right: 5px;
  }

  /* @media screen and (min-width: 480px) {
    width: 200px;
  }
  @media screen and (min-width: 680px) {
    width: 150px;
  } */
`;

export const CategoryCode = styled.p`
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[5]}px;
  padding-right: ${(props) => props.theme.space[3]}px;
  border-radius: 0 5px 5px 0px;
  display: inline-block;
  min-width: 90px;
  text-align: center;
  color: ${(props) => props.theme.colors.textWhiteColor};
  font-size: ${(props) => props.theme.fontSizes.m};
  @media screen and (min-width: 680px) {
    padding-left: ${(props) => props.theme.space[3]}px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    right: 3px;
    width: 5px;
    height: 5px;
    display: inline-block;
    border-radius: 50%; // Зробити коло
    background-color: ${(props) =>
      props.origin === "false" && props.theme.colors.white};
  }
  &::after {
    content: "";
    position: absolute;
    top: 12px;
    right: 3px;
    width: 5px;
    height: 5px;
    display: inline-block;
    border-radius: 50%; // Зробити коло

    background-color: ${(props) => props.$owner && props.theme.colors.yellow};
  }
`;

export const DescriptionWrapper = styled.div`
  padding: ${(props) => props.theme.space[2]}px;
  /* outline: 1px solid red; */
  position: relative;
`;

export const CopyParent = styled.div`
  /* position: relative; */
  /* outline: 1px solid green; */
`;

export const CategoryDescription = styled.p`
  padding-left: 20px;
  line-height: 1;
  font-size: ${(props) => props.theme.fontSizes.m};
`;
export const HilightDescription = styled.div`
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSizes.s};
  background-color: ${(props) => props.type === "mark" && "yellow"};
`;

export const UserPrice = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.orange};
  padding-left: 10px;
`;

// Можна отримати доступ до пропсів
//  ${(props) => {
//     console.log(props);
//   }}

// Так можна додати зображення на фон
// background-image: ${props => `url(${props.img})`}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const expandHeight = keyframes`
from {
    max-height: 0;
  }
  to {
    max-height: 1000px; 
  }
`;

export const SubList = styled.div`
  /* animation: 2s ${fadeIn} ease-in; */
  animation: ${expandHeight} 0.5s ease-in-out;
  /* overflow: hidden; */
`;

export const Animation = styled.div`
  &.fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  /* Використання спеціальних імен класів для анімації зникнення */
  &.fade-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
`;
