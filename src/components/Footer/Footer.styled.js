import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundBlack};
  color: ${(props) => props.theme.colors.backgroundWhite};
  position: sticky;
  bottom: 0;
  z-index: 1000;
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
`;

export const ContactList = styled.ul`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.s};
  gap: 20px;

  @media screen and (min-width: 480px) {
    display: flex;
    align-items: baseline;
  }
`;

export const Contact = styled.li`
  display: flex;
  gap: 10px;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
