import styled from "styled-components";
// import { Form, Field } from "formik";

export const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  /* border-color: ${({ bordercolor }) => bordercolor}; */
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
    /* background-color: ${(props) => props.theme.colors.backgroundWhite}; */
    /* border-color: ${({ bordercolor }) => bordercolor}; */
  }
`;

export const InputWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: ${(props) => props.theme.borders.bold};
  /* border-color: ${({ bordercolor }) => bordercolor}; */
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
    /* border-color: ${({ bordercolor }) => bordercolor}; */
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
