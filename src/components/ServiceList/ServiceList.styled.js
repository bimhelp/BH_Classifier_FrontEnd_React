import styled from "styled-components";
import { setBgColor } from "../../services";

export const List = styled.ul`
  margin-left: ${(props) => props.theme.space[3]}px;

  border-left: 2px solid;
  border-color: ${setBgColor};
`;

export const Item = styled.li`
  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[1]}px;
  }
`;
