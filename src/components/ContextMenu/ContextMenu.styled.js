import styled from "styled-components";

export const ContextMenuWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  /* padding: ${(props) => props.theme.space[3]}px; */
  padding-top: ${(props) => props.theme.space[5]}px;
  /* outline: 1px solid orangered; */
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: ${(props) => props.theme.radii.normal};
  box-shadow: ${(props) => props.theme.shadows.full};

  @media screen and (min-width: 320px) {
    max-width: 300px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
`;
export const Content = styled.div`
  padding: ${(props) => props.theme.space[3]}px;
`;
