import styled from "styled-components";

import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  /* border-color: ${(props) => props.theme.colors.black}; */
  border-color: ${({ bordercolor }) => bordercolor};
  border-radius: ${(props) => props.theme.radii.normal};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  /* padding: 12px 12px 12px 40px; */
  padding: 8px;
  color: ${(props) => props.theme.colors.black};

  &:hover,
  &:focus {
    border: ${(props) => props.theme.borders.bold};
    /* background-color: ${(props) => props.theme.colors.backgroundWhite}; */
    border-color: ${({ bordercolor }) => bordercolor};
  }
`;

export const Label = styled.label``;
