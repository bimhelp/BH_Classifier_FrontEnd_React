import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.space[2]}px;
`;

export const Label = styled.label`
  width: 100%;
  @media screen and (min-width: 680px) {
    width: 25%;
  }
`;
export const Input = styled.input`
  font-size: ${(props) => props.theme.fontSizes.m};
  width: 100%;
  padding: 2px;
  padding-left: ${(props) => props.theme.space[3]}px;
  border-top: ${(props) => props.theme.borders.bold};
  border-bottom: ${(props) => props.theme.borders.bold};
  border-left: ${(props) => props.theme.borders.none};
  border-right: ${(props) => props.theme.borders.none};
  text-decoration: none;
`;
