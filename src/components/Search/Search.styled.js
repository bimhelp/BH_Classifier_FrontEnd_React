import styled from "styled-components";

export const FormStyled = styled.form`
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-bottom: ${(props) => props.theme.space[2]}px;
  @media screen and (min-width: 680px) {
    width: 40%;
  }
`;

export const Label = styled.label`
  width: 100%;
`;
export const Input = styled.input`
  font-size: ${(props) => props.theme.fontSizes.m};
  width: 100%;
  padding: 9px;
  box-sizing: border-box;
  border-top: ${(props) => props.theme.borders.bold};
  border-bottom: ${(props) => props.theme.borders.bold};
  border-left: ${(props) => props.theme.borders.none};
  border-right: ${(props) => props.theme.borders.none};
  text-decoration: none;
  &:focus {
    border-top: ${(props) => props.theme.borders.bold};
    border-bottom: ${(props) => props.theme.borders.bold};
    border-left: ${(props) => props.theme.borders.none};
    border-right: ${(props) => props.theme.borders.none};
  }
`;
