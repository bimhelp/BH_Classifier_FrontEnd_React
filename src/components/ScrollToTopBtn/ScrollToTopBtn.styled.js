import styled from "styled-components";

export const ToTopBtn = styled.button`
  position: fixed;
  bottom: 80px;
  right: 15px;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.normal};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  @media screen and (min-width: 480px) {
    bottom: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
  }
`;
