import styled from "styled-components";

export const MaterialWrapper = styled.div`
  background-color: var(--materialColorAlfa);
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;
  }

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

export const MaterialCode = styled.p`
  padding: 0 10px;
  border-radius: 5px;
  display: inline-block;
  background-color: var(--materialColor);
  color: var(--text-white);
  min-width: 90px;
  text-align: center;
  color: ${(props) => props.theme.colors.textWhiteColor};

  &:hover {
    cursor: copy;
  }
`;

export const Description = styled.p`
  padding-left: 10px;
  &:hover {
    cursor: copy;
  }
`;

export const HilightDescription = styled.div`
  padding-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.s};
  background-color: ${(props) => props.type === "mark" && "yellow"};
`;

export const MaterialPrice = styled.p`
  font-size: 12px;
  color: var(--price-color);
  padding-left: 10px;
`;

export const MaterialUnit = styled.p`
  font-size: 12px;
  color: var(--unit-color);
  padding-left: 10px;
`;

export const Extended = styled.div`
  display: flex;
`;
