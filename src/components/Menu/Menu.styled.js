import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[3]}px;
  text-transform: uppercase;
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LinkTitle = styled.span`
  display: none;
  @media screen and (min-width: 680px) {
    display: block;
  }
`;
export const Navigation = styled.nav`
  width: 100%;
  display: flex;

  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
