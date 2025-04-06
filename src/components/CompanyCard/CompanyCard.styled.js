import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.radii.normal};
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  background-color: ${(props) =>
    props.isdelete
      ? props.theme.colors.atention
      : props.theme.colors.backgroundGrey};
  /* outline: 1px solid tomato; */
  margin-bottom: ${(props) => props.theme.space[2]}px;

  &:hover,
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;
  }
`;

export const CompanyName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.l};
`;
