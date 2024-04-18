import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]}px;
  margin-bottom: 15px;

  min-width: 100px;
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
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const Table = styled.table`
  border-collapse: collapse;

  & caption {
    text-align: left;
  }

  & th,
  & td {
    padding: 2px 10px;
    border: 1px solid #2a2a2a;
  }

  & tr:hover {
    /* background-color: ${(props) => props.theme.colors.white}; */
    /* box-shadow: ${(props) => props.theme.shadows.shadow}; */
  }
`;

export const ServiceRow = styled.tr`
  background-color: bisque;
`;

export const SubMaterialRow = styled.tr`
  background-color: ${(props) => props.theme.colors.backgroundMain};
`;

export const MaterialRow = styled.tr`
  background-color: ${(props) => props.theme.colors.backgroundMain};
`;

export const Code = styled.td`
  white-space: nowrap;
  /* width: 100px; */
`;

export const List = styled.ul`
  margin-left: ${(props) => props.theme.space[4]}px;

  /* border-left: 2px solid; */
`;

export const Item = styled.li`
  /* margin-bottom: ${(props) => props.theme.space[1]}px; */
  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[1]}px;
  }
`;

export const MaterialHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
