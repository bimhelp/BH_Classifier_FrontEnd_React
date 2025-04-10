import styled from "styled-components";
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  flex: 1 1 calc(25% - 30px); // 4 в ряд з відступами
  /* flex-basis: calc(25% - 20px); // 4 в ряд з відступами */
  min-width: 250px;
  box-sizing: border-box;
`;
