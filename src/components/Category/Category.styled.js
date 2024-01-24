import styled from "styled-components";

export const CategoryWrapper = styled.div`
  background-color: var(--materialColorAlfa);
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;
  }

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

const setBgColor = (props) => {
  switch (props.cssClass) {
    case "main":
      return "var(--categoryColor)";
    case "first":
      return "var(--firstLevelColor)";
    case "second":
      return "var(--secondLevelColor)";
    case "third":
      return "var(--thirdLevelColor)";
    default:
      return "var(--categoryColor)";
  }
};

export const CategoryCode = styled.p`
  padding: 0 10px;
  border-radius: 0 5px 5px 5px;
  display: inline-block;
  color: var(--text-white);
  min-width: 90px;
  text-align: center;
  background-color: ${setBgColor};
`;

export const CategoryDescription = styled.p`
  padding-left: 10px;
`;

// Можна отримати доступ до пропсівї
//  ${(props) => {
//     console.log(props.cssClass);
//   }}

// Так можна додати зображення на фон
// background-image: ${props => `url(${props.img})`}
