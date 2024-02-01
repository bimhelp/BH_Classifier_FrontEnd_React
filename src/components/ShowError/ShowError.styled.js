import styled from "styled-components";

export const Message = styled.p`
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[4]}px;
  padding-right: ${(props) => props.theme.space[4]}px;

  border-radius: ${(props) => props.theme.radii.normal};
  color: ${(props) => props.theme.colors.textWhiteColor};
  background-color: ${(props) => props.theme.colors.red};
`;
