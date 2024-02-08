import styled from "styled-components";

export const ContextMenuWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: ${(props) => props.theme.space[4]}px;
  /* outline: 1px solid orangered; */
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: ${(props) => props.theme.radii.normal};
  box-shadow: ${(props) => props.theme.shadows.full};
`;
