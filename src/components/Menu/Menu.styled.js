import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
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
