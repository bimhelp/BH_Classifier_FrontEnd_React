import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;

  & caption {
    text-align: left;
  }

  & th,
  & td {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }

  & tr:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
