import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
  padding-left: 15px;
  padding-top: 25px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadows.full};
  position: relative;
`;
export const FormTitle = styled.h2`
  margin-left: 20px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  /* outline: 1px solid green; */
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  position: relative;
  width: 100%;
  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 10px) / 2);
  }
`;

export const ShortInputWrapper = styled.div`
  /* outline: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  position: relative;
  width: 100%;
  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 3 * 10px) / 4);
  }
`;
export const MessageVrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const TextArea = styled(Field)`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  border-color: ${({ bordercolor }) => bordercolor};
  border-radius: ${(props) => props.theme.radii.normal};
  font-weight: 400;

  font-weight: 400;
  padding: 6px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.black};
  height: 21px;
  /* resize: none; */
  /* @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  } */

  &:hover,
  &:focus {
    border: ${(props) => props.theme.borders.bold};
    background-color: ${(props) => props.theme.colors.backgroundWhite};
    box-shadow: ${(props) => props.theme.shadows.shadow};
    border-color: ${({ bordercolor }) => bordercolor};
    outline: 0px solid white;
  }
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
  padding: 6px;
  color: ${(props) => props.theme.colors.black};

  /* @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  } */

  &:hover,
  &:focus {
    border: ${(props) => props.theme.borders.bold};
    border-color: ${({ bordercolor }) => bordercolor};
    box-shadow: ${(props) => props.theme.shadows.shadow};
    outline: 0px solid white;
  }
`;
export const Select = styled.select`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  border-color: ${({ bordercolor }) => bordercolor};
  border-radius: ${(props) => props.theme.radii.normal};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  height: 41px;
  letter-spacing: -0.02em;
  padding: 4px;
  color: ${(props) => props.theme.colors.black};

  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }

  &:hover,
  &:focus {
    border: ${(props) => props.theme.borders.bold};
    border-color: ${({ bordercolor }) => bordercolor};
    box-shadow: ${(props) => props.theme.shadows.shadow};
  }
`;

export const ErrorMessageStyled = styled.div`
  color: ${(props) => props.theme.colors.invalid};
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.s};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
