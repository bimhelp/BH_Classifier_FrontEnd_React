import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  color: black;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
  border-color: ${(props) => props.theme.colors.black};
`;
