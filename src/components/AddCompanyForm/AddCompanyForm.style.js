import styled from "styled-components";
export const DateWrapper = styled.div`
  color: ${(props) => props.theme.colors.textGreyColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;
