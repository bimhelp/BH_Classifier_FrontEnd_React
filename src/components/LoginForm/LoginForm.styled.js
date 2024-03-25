import styled from "styled-components";

import { Form, Field } from "formik";
import { NavLink } from "react-router-dom";

export const StyledForm = styled(Form)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled(Field)`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  border-color: ${({ bordercolor }) => bordercolor};
  border-radius: ${(props) => props.theme.radii.normal};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  /* padding: 12px 12px 12px 40px; */
  padding: 4px;
  color: ${(props) => props.theme.colors.black};

  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }

  &:hover,
  &:focus {
    border: ${(props) => props.theme.borders.bold};
    /* background-color: ${(props) => props.theme.colors.backgroundWhite}; */
    border-color: ${({ bordercolor }) => bordercolor};
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.black};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const Label = styled.label``;

export const ErrorMessageStyled = styled.div`
  color: ${(props) => props.theme.colors.invalid};
  position: absolute;
  right: 0;
`;

export const FormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  @media screen and (min-width: 480px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
