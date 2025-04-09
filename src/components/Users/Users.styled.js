import styled from "styled-components";
import { setRoleColor } from "../../services";

export const Table = styled.table`
  border-collapse: collapse;
  font-size: ${(props) => props.theme.fontSizes.s};

  & caption {
    text-align: left;
  }

  & th,
  & td {
    padding: 2px 10px;
    border: 1px solid #2a2a2a;
  }

  & tr:hover {
    background-color: ${(props) => props.theme.colors.backgroundGrey};
  }
`;

export const Row = styled.tr``;

export const Name = styled.td``;
export const Role = styled.td`
  background-color: ${setRoleColor};
`;
