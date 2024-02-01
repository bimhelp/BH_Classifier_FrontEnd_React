import React from "react";
import { Message } from "./ShowError.styled";

const ShowError = ({ children }) => {
  return (
    <>
      <Message>{children}</Message>
    </>
  );
};

export default ShowError;
