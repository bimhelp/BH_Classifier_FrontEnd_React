import styled from "styled-components";

export const ToTopBtn = styled.button`
  z-index: 1100;
  position: fixed;
  bottom: 100px;
  right: 15px;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.normal};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  @media screen and (min-width: 375px) {
    bottom: 60px;
    right: 15px;
    height: 40px;
    width: 40px;
  }
  /* @media screen and (min-width: 480px) {
    bottom: 60px;
    right: 15px;
    height: 40px;
    width: 40px;
  } */
  @media screen and (min-width: 600px) {
    bottom: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
  }
`;
