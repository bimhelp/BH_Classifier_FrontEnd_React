import styled from "styled-components";
export const PropertyList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Property = styled.li`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textGreyColor};
  padding-left: 10px;
  &:nth-child(2n) {
    color: ${(props) => props.theme.colors.unitColor};
  }
`;
