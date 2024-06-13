import GoogleLogin from "react-google-login";
import { CLIENT_ID } from "../../constants/constants";

import React from "react";

const onSuccess = (res) => {
  console.log("login success, current user: ", res.profileObj);
};

const onFailure = (res) => {
  console.log("login failed, res: ", res);
};
const GoogleLoginBtn = () => {
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginBtn;
