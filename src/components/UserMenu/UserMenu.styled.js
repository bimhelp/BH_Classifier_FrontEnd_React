import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${(props) => props.theme.fontSizes.l};
  border: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const UserName = styled.p`
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes.s};
`;
