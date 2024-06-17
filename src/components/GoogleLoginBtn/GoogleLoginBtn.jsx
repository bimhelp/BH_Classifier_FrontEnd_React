// import React from "react";
import React, { useContext } from "react";
import { authContext as context } from "../../context/authContext";

import { GoogleLink } from "./GoogleLoginBtn.styled";
const GoogleLoginBtn = () => {
  const { onGoogleLogin } = useContext(context);
  return (
    <GoogleLink
      type="button"
      // href="https://classifier-backend.fly.dev/api/v1/auth/google/callback"
      onClick={onGoogleLogin}
    >
      Google
    </GoogleLink>
  );
};

export default GoogleLoginBtn;
