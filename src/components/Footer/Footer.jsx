import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { NavLink } from "react-router-dom";

import { FooterWrapper, Contact, ContactList } from "./Footer.styled";
import Container from "../Container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiAutodeskrevit } from "react-icons/si";
const Footer = () => {
  const { user } = useContext(context);
  console.log("user: ", user.name);

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
            {user?.name ? (
              <a
                href="https://drive.google.com/uc?id=13ibti5yxLyhZ7USv-QNnA9rj5Ky8i0jJ&export=download"
                target="_blank"
                rel="noreferrer noopener"
              >
                Завантажити плагін для Revit
              </a>
            ) : (
              <NavLink to="registration">Завантажити плагін для Revit</NavLink>
            )}
          </Contact>
        </ContactList>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
