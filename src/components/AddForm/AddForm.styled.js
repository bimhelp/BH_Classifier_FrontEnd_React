import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
  padding-left: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadows.full};
  position: relative;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const TextArea = styled(Field)`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  border-color: ${({ bordercolor }) => bordercolor};
  border-radius: ${(props) => props.theme.radii.normal};
  font-weight: 400;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.black};
  /* min-height: 10px; */
  height: 21px;
  resize: none;
  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }

  &:hover,
  &:focus {
    border: ${(props) => props.theme.borders.bold};
    background-color: ${(props) => props.theme.colors.backgroundWhite};
    border-color: ${({ bordercolor }) => bordercolor};
  }
`;

export const InputWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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

export const Label = styled.label``;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ErrorMessageStyled = styled.div`
  color: ${(props) => props.theme.colors.invalid};
  position: absolute;
  right: 0;
`;
