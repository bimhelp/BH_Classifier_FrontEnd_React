import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]}px;

  min-width: 150px;
  /* margin: ${(props) => props.theme.space[2]}px; */
  padding-top: ${(props) => props.theme.space[3]}px;
  padding-bottom: ${(props) => props.theme.space[3]}px;
  padding-left: ${(props) => props.theme.space[4]}px;
  padding-right: ${(props) => props.theme.space[4]}px;

  border: ${(props) => props.theme.borders.bold};
  border-radius: ${(props) => props.theme.radii.normal};

  background-color: ${(props) =>
    props.disabled ? props.theme.colors.muted : props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.m};

  background-color: ${(props) =>
    props.role === "warning"
      ? props.theme.colors.red
      : props.theme.colors.primary};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.hover};
    background-color: ${(props) =>
      props.role === "warning"
        ? props.theme.colors.red
        : props.theme.colors.primary};
  }
`;

export const StyledBack = styled(StyledButton)`
  margin: ${(props) => props.theme.space[0]}px;

  min-width: fit-content;
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;

  border-top-left-radius: ${(props) => props.theme.radii.normal};
  border-top-right-radius: ${(props) => props.theme.radii.none};
  border-bottom-right-radius: ${(props) => props.theme.radii.none};
  border-bottom-left-radius: ${(props) => props.theme.radii.normal};
  border-color: ${(props) => props.theme.colors.black};

  color: ${(props) => props.theme.colors.textWhiteColor};
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
  min-width: fit-content;
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  padding-right: ${(props) => props.theme.space[3]}px;
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

export const StyledCloseButton = styled(StyledButton)`
  position: absolute;
  top: ${(props) => props.theme.space[4]}px;
  right: ${(props) => props.theme.space[4]}px;
  padding: ${(props) => props.theme.space[2]}px;
  margin-bottom: ${(props) => props.theme.space[2]}px;
  background-color: ${(props) => props.theme.colors.backgroundWhite};

  min-width: fit-content;
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    /* background-color: ${(props) => props.theme.colors.primary}; */

    background-color: ${(props) => props.theme.colors.red};
  }
`;
export const StyledIconButton = styled(StyledButton)`
  position: ${(props) => props.position === "absolute" && "absolute"};
  top: 50%;
  left: 0;
  transform: ${(props) =>
    props.position === "absolute" && "translate(0, -50%)"};
  min-width: fit-content;
  width: fit-content;
  font-size: ${(props) => props.theme.fontSizes.m};
  padding: ${(props) => props.theme.space[2]}px;
  color: white;
  color: ${(props) => props.variant === "dark" && props.theme.colors.black};

  opacity: ${(props) => props.visibility === "hide" && 1};

  border: ${(props) => props.theme.borders.none};
  background-color: transparent;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: cell;
    color: ${(props) => props.variant === "dark" && props.theme.colors.black};
    background-color: transparent;
    opacity: 1;
  }
  @media screen and (min-width: 680px) {
    opacity: ${(props) => props.visibility === "hide" && 0};
  }
`;
