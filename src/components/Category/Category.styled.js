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

export const CodeWrapper = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  background-color: ${setBgColor};
  border-radius: 0 5px 5px 0px;
  justify-content: end;

  @media screen and (min-width: 680px) {
    display: flex;
  }
`;

export const CategoryCode = styled.p`
  /* padding: 5px 10px; */
  padding: ${(props) => props.theme.space[2]}px;

  /* padding-top: ${(props) => props.theme.space[0]}px; */
  /* padding-bottom: ${(props) => props.theme.space[0]}px; */
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;
  border-radius: 0 5px 5px 0px;
  display: inline-block;
  color: var(--text-white);
  min-width: 90px;
  text-align: center;
  color: ${(props) => props.theme.colors.textWhiteColor};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

export const DescriptionWrapper = styled.div`
  /* outline: 1px solid red; */
  position: relative;
`;

export const CategoryDescription = styled.p`
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSizes.s};
`;
export const HilightDescription = styled.div`
  padding-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.s};
  background-color: ${(props) => props.type === "mark" && "yellow"};
`;

// Можна отримати доступ до пропсівї
//  ${(props) => {
//     console.log(props);
//   }}

// Так можна додати зображення на фон
// background-image: ${props => `url(${props.img})`}
