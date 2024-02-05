import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.space[2]}px;

  /* margin: ${(props) => props.theme.space[2]}px; */
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;

  border: ${(props) => props.theme.borders.bold};
  border-radius: ${(props) => props.theme.radii.normal};

  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.muted
      : props.theme.colors.backgroundWhite};
  font-size: ${(props) => props.theme.fontSizes.m};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledBack = styled(StyledButton)`
  margin: ${(props) => props.theme.space[0]}px;

  color: ${(props) => props.theme.colors.textWhiteColor};

  border-top-left-radius: ${(props) => props.theme.radii.normal};
  border-top-right-radius: ${(props) => props.theme.radii.none};
  border-bottom-right-radius: ${(props) => props.theme.radii.none};
  border-bottom-left-radius: ${(props) => props.theme.radii.normal};
  border-color: ${(props) => props.theme.colors.black};

  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.muted
      : props.theme.colors.backgroundBlack};
  font-size: ${(props) => props.theme.fontSizes.m};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    /* background-color: ${(props) => props.theme.colors.primary}; */
    border-right-color: transparent;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export const StyledSearch = styled(StyledButton)`
  margin: ${(props) => props.theme.space[0]}px;

  color: ${(props) => props.theme.colors.textWhiteColor};

  border: ${(props) => props.theme.borders.bold};
  border-radius: ${(props) => props.theme.radii.normal};
  border-top-left-radius: ${(props) => props.theme.radii.none};
  border-top-right-radius: ${(props) => props.theme.radii.normal};
  border-bottom-right-radius: ${(props) => props.theme.radii.normal};
  border-bottom-left-radius: ${(props) => props.theme.radii.none};
  border-color: ${(props) => props.theme.colors.black};

  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.muted
      : props.theme.colors.backgroundBlack};
  font-size: ${(props) => props.theme.fontSizes.m};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    border-left-color: transparent;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const IconButton = styled(StyledButton)`
  position: absolute;
  top: ${(props) => props.theme.space[4]}px;
  right: ${(props) => props.theme.space[4]}px;
  padding: ${(props) => props.theme.space[2]}px;
  margin-bottom: ${(props) => props.theme.space[2]}px;
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    /* background-color: ${(props) => props.theme.colors.primary}; */

    background-color: ${(props) => props.theme.colors.red};
  }
`;
