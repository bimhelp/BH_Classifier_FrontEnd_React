import React from "react";
import Section from "../../components/Section/Section";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleLoginBtn from "../../components/GoogleLoginBtn/GoogleLoginBtn";

const LogInPage = () => {
  return (
    <Section>
      <LoginForm />
      <GoogleLoginBtn />
    </Section>
  );
};

export default LogInPage;
