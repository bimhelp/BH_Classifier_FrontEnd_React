import React from "react";
import { FooterWrapper, Contact, ContactList } from "./Footer.styled";
import Container from "../Container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiAutodeskrevit } from "react-icons/si";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContactList>
          <Contact>
            <h3>Контакти:</h3>
          </Contact>
          <Contact>
            <MdEmail />
            <a href="mailto:info@bimhelp.com.ua">info@bimhelp.com.ua</a>
          </Contact>
          <Contact>
            <FaPhoneAlt />
            <a href="tel:+380733050800">+38 073 30 50 800</a>
          </Contact>
          <Contact>
            <SiAutodeskrevit />
            <a
              href="https://drive.google.com/drive/folders/17y6FYQ_if2LSBmSmSpJhtAmb-G_2casa?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Плагін для Revit
            </a>
          </Contact>
        </ContactList>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
