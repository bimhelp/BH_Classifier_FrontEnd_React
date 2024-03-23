import React from "react";
import Container from "../Container/Container";
import Menu from "../Menu/Menu";
import { HeaderWrapper, MenuWrapper } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
