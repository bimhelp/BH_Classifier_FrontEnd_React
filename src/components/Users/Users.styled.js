import styled from "styled-components";

export const UserItem = styled.div`
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  padding-bottom: 10px;
`;
export const UserName = styled.p`
  background-color: ${(props) => props.theme.colors.mainLevelColor};
  min-width: max-content;
  padding: 5px 15px;
  color: white;
  border-radius: ${(props) => props.theme.radii.normal};
`;

export const UserEmail = styled.p`
  width: max-content;
  padding: 0 5px;
`;
