import React, { useEffect, useContext } from "react";
import { authContext as context } from "../../context/authContext";
import { useSearchParams } from "react-router-dom";

const LoginGoogle = () => {
  const { onGoogleLogin } = useContext(context);
  // const location = useLocation();
  const [searchParams] = useSearchParams();
  // console.log("loginGoogle")
  useEffect(() => {
    // const searchParams = new URLSearchParams(location.search);
    const tokenParam = searchParams.get("token");
    // console.log("LoginGoogle: tokenParam: ", tokenParam);
    onGoogleLogin(tokenParam);
  }, [onGoogleLogin, searchParams]);

  return <div>Google Login</div>;
};

export default LoginGoogle;
