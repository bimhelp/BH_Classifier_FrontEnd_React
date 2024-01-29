import styled from "styled-components";
import { Form, Field } from "formik";

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
`;

export const Input = styled(Field)`
  font-size: ${(props) => props.theme.fontSizes.m};
  padding: ${(props) => props.theme.space[1]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  border-top: ${(props) => props.theme.borders.bold};
  border-bottom: ${(props) => props.theme.borders.bold};
  border-left: ${(props) => props.theme.borders.none};
  border-right: ${(props) => props.theme.borders.none};
`;
