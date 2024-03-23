import React from "react";
import { FooterWrapper, Contact, ContactList } from "./Footer.styled";
import Container from "../Container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <h3>Контакти:</h3>
        <ContactList>
          <Contact>
            <MdEmail />
            <a href="mailto:info@bimhelp.com.ua">info@bimhelp.com.ua</a>
          </Contact>
          <Contact>
            <FaPhoneAlt />
            <a href="tel:+380733050800">+38 073 30 50 800</a>
          </Contact>
        </ContactList>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
