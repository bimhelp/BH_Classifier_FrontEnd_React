import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.space[2]}px;

  margin: ${(props) => props.theme.space[2]}px;
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;

  border: ${(props) => props.theme.borders.bold};
  border-radius: ${(props) => props.theme.radii.normal};

  background-color: ${(props) =>
    props.disabled ? props.theme.colors.muted : props.theme.colors.background};
  font-size: ${(props) => props.theme.fontSizes.m};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
