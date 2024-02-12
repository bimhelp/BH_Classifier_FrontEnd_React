import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${(props) => props.theme.space[3]}px;

  border: ${(props) => props.theme.borders.bold};
  border-radius: ${(props) => props.theme.radii.normal};
  background-color: ${(props) => props.theme.colors.primary};

  /* text-transform: uppercase; */
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
