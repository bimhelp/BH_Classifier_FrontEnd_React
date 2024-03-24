import styled, { keyframes } from "styled-components";
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
    align-items: center;
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
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;
  border-radius: 0 5px 5px 0px;
  display: inline-block;
  min-width: 90px;
  text-align: center;
  color: ${(props) => props.theme.colors.textWhiteColor};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

export const DescriptionWrapper = styled.div`
  padding: ${(props) => props.theme.space[2]}px;
`;

export const CopyParent = styled.div`
  /* outline: 1px solid green; */
  position: relative;
`;

export const CategoryDescription = styled.p`
  padding-left: 30px;
  line-height: 1;
  font-size: ${(props) => props.theme.fontSizes.m};
`;
export const HilightDescription = styled.div`
  padding-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.s};
  background-color: ${(props) => props.type === "mark" && "yellow"};
`;

export const MaterialPrice = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.green};
  padding-left: 10px;
`;

export const UserPrice = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.orange};
  padding-left: 10px;
`;

export const MaterialUnit = styled.p`
  font-size: 12px;
  color: var(--unit-color);
  padding-left: 10px;
`;

export const Extended = styled.div`
  line-height: 1;
  /* outline: 1px red solid; */
  padding-left: 24px;
  display: flex;
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
    max-height: 1000px; /* Замініть це значення на максимальну можливу висоту вашого елемента */
  }
`;

export const SubList = styled.div`
  /* animation: 2s ${fadeIn} ease-in; */
  animation: ${expandHeight} 0.5s ease-in-out;
  overflow: hidden;
`;

// .accordion-toggle {
//     height: 0px;
//     font-size: 18px;
//     opacity: 0;
//     transition:
//     opacity 0.3s ease-in-out,
//     height 0.3s 0.3s ease-in-out;
//     color: #333;
//     border-bottom-left-radius: 3px;
//     border-bottom-right-radius: 3px;
// }

// .animated {
//     opacity: 1;
//     transition:
//     height 0.3s ease-in-out,
//     opacity 0.3s 0.3s ease-in-out;
// }

// .accordion-toggle p {
//     margin: 0;
//     padding: 22px 15px;
//     pointer-events: none;
//     line-height: 1.3;
// }
