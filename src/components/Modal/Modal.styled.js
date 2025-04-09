import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  min-width: 300px;
  height: 75%;
  width: 76%;
  padding: 12px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: ${(props) => props.theme.radii.normal};
  box-shadow: ${(props) => props.theme.shadows.swadow};
`;
export const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes.l};
`;
export const Content = styled.div`
  /* outline: 1px solid red; */
  width: 100%;
  height: 95%;
  padding-right: ${(props) => props.theme.space[3]}px;
  overflow-y: scroll;
`;
