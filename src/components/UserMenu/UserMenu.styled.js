import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 30px;

  padding: ${(props) => props.theme.space[4]}px;
  /* outline: 1px solid orangered; */
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: ${(props) => props.theme.radii.normal};
  box-shadow: ${(props) => props.theme.shadows.full};
`;
