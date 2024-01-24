import styled from "styled-components";

export const List = styled.ul`
  margin-left: 15px;
  border-left: 1px solid rgb(201, 199, 199);
`;

export const Item = styled.li`
  &:hover {
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-bottom: 2px;
  }
`;
