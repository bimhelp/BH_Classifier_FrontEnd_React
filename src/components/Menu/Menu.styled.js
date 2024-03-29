import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[3]}px;
  text-transform: uppercase;
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }

  &.active {
    border-bottom: ${(props) => props.theme.borders.hevy};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const LinkTitle = styled.span`
  display: block;
  @media screen and (min-width: 680px) {
    display: block;
  }
`;
export const Navigation = styled.nav`
  width: 100%;
  display: flex;

  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
`;

export const DesctopMenu = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  gap: 10px;

  top: 44px;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);

  padding: ${(props) => props.theme.space[5]}px;

  background-color: ${(props) => props.theme.colors.black};
  transition: transform 0.3s linear;

  @media screen and (min-width: 680px) {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: ${(props) => props.theme.space[0]}px;
    transition: transform 0.3s linear;
    /* background-color: transparent; */

    transform: translateX(0%);
  }
  &.active {
    transform: translateX(0%);
  }
`;
export const MenuBtn = styled.button`
  display: inline-flex;
  min-width: fit-content;
  width: fit-content;
  /* padding: ${(props) => props.theme.space[2]}px; */

  font-size: ${(props) => props.theme.fontSizes.l};
  color: white;
  color: ${(props) => props.variant === "dark" && props.theme.colors.black};
  background-color: transparent;

  /* border: ${(props) => props.theme.borders.bold};
  border-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.normal}; */
  border: none;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: var(--card-shadow);
    color: ${(props) => props.theme.colors.hover};
  }
  @media screen and (min-width: 680px) {
    display: none;
  }
`;
