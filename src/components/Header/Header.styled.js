import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
`;
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
`;
