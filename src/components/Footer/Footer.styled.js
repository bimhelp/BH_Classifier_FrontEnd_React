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

  /* display: flex; */
  /* flex-wrap: wrap; */
  font-size: ${(props) => props.theme.fontSizes.s};

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }
`;

export const Contact = styled.li`
  display: flex;

  gap: 10px;
  align-items: baseline;
  margin-right: 15px;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;
