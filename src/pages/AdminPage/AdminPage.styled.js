import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Layout = styled.div`
  display: flex;
  width: 100%;
  /* outline: 1px solid green; */
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  color: black;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
