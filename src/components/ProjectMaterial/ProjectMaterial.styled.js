import styled from "styled-components";

export const MaterialWrapper = styled.div`
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
  background-color: ${(props) => props.theme.colors.materialColor};
  border-radius: 0 5px 5px 0px;
  justify-content: end;

  @media screen and (min-width: 680px) {
    display: flex;
  }
`;

export const MaterialCode = styled.p`
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;
  border-radius: 5px;
  display: inline-block;
  min-width: 90px;
  text-align: center;
  color: ${(props) => props.theme.colors.textWhiteColor};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  /* outline: 1px solid red; */
  display: flex;
  justify-content: start;
  position: relative;
`;

export const Description = styled.p`
  padding: ${(props) => props.theme.space[2]}px;
  font-size: ${(props) => props.theme.fontSizes.m};
  width: 300px;
  /* outline: 1px solid teal; */
`;

// export const HilightDescription = styled.div`
//   padding-left: 10px;
//   font-size: ${(props) => props.theme.fontSizes.s};
//   background-color: ${(props) => props.type === "mark" && "yellow"};
// `;

export const MaterialPrice = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.green};
  padding-left: 10px;
  width: 50px;
  /* outline: 1px solid green; */
`;

export const StyledUserPrice = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.orange};
  padding-left: 10px;
  width: 50px;
  /* outline: 1px solid orangered; */
`;

export const MaterialUnit = styled.p`
  font-size: 12px;
  color: var(--unit-color);
  padding-left: 10px;
  width: 50px;
  /* outline: 1px solid blue; */
`;

export const Extended = styled.div`
  display: flex;
`;

export const MaterialMenu = styled.div`
  display: flex;
  /* outline: 1px solid green; */
`;
