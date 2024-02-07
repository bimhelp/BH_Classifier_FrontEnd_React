import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLink = styled(NavLink)`
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

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
