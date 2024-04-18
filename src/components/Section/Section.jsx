// Секція поділяє сторінку на різні типи контенту, логічні блоки інформації
import React from "react";
import Container from "../Container/Container";
import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <Container>
        {title && <h2 className={css.sectionTitle}>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};

export default Section;
