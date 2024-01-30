import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
export const UserWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const UserButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${(props) => props.theme.fontSizes.l};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary}

 
`;

export const UserName = styled.p`
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes.s};
`;
