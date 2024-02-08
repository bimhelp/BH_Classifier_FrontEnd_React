import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogInButton = styled(NavLink)`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  font-size: ${(props) => props.theme.fontSizes.m};
  border: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const UserWrapper = styled.div`
  display: flex;
`;
