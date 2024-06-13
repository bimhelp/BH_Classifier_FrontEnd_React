import React, { useEffect } from "react";
import Section from "../../components/Section/Section";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleLoginBtn from "../../components/GoogleLoginBtn/GoogleLoginBtn";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "../../constants/constants";

const LogInPage = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <Section>
      <LoginForm />
      <GoogleLoginBtn />
    </Section>
  );
};

export default LogInPage;
