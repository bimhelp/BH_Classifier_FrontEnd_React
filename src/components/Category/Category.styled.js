import styled from "styled-components";
import { setBgColor } from "../../services";

export const CategoryWrapper = styled.div`
  background-color: var(--materialColorAlfa);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: ${(props) => props.theme.space[1]}px;

  &:hover,
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;
  }

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

export const CategoryCode = styled.p`
  padding: 0 10px;
  border-radius: 0 5px 5px 0px;
  display: inline-block;
  color: var(--text-white);
  min-width: 90px;
  text-align: center;
  background-color: ${setBgColor};
  color: ${(props) => props.theme.colors.textWhiteColor};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

export const CategoryDescription = styled.p`
  padding-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.s};
`;

// Можна отримати доступ до пропсівї
//  ${(props) => {
//     console.log(props.cssClass);
//   }}

// Так можна додати зображення на фон
// background-image: ${props => `url(${props.img})`}
