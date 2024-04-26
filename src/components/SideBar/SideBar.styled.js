import styled from "styled-components";

export const Navigation = styled.nav`
  /* border: 1px solid tomato; */
  box-shadow: ${(props) => props.theme.shadows.shadow};
  padding: 5px;
  width: 200px;

  /* background-color: ${(props) => props.theme.colors.backgroundMain}; */
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.m};
`;
