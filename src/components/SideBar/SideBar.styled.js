import styled from "styled-components";

export const Navigation = styled.nav`
  height: 100%;
  border: 1px solid tomato;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.shadows.shadow};
  padding: 5px;
  justify-content: start;
  align-items: center;
  width: 200px;
`;
