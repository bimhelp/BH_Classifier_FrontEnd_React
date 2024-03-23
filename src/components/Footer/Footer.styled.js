import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundBlack};
  color: ${(props) => props.theme.colors.backgroundWhite};
  position: sticky;
  bottom: 0;
  z-index: 1000;
`;
