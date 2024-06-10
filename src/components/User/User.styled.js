import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { setRoleColor } from "../../services";

export const LogInButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${(props) => props.theme.fontSizes.m};
  border: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[3]}px;
  /* text-transform: uppercase; */
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }

  /* &.active {
    border-bottom: ${(props) => props.theme.borders.hevy};
    border-color: ${(props) => props.theme.colors.primary};
  } */
`;

export const LinkTitle = styled.span`
  display: block;
  @media screen and (min-width: 680px) {
    display: block;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 4px 6px;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  color: white;
  background-color: ${setRoleColor};
`;

export const UserWrapper = styled.div`
  display: flex;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[3]}px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Plugin = styled.div`
  display: flex;

  gap: 10px;
  align-items: baseline;
  margin-right: 15px;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
