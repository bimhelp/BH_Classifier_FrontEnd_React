import styled from "styled-components";

export const Card = styled.div`
  /* outline: 1px solid tomato; */
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  border-radius: ${(props) => props.theme.radii.normal};
  padding: ${(props) => props.theme.space[2]}px;
  padding-left: ${(props) => props.theme.space[3]}px;
  background-color: ${(props) =>
    props.isdelete
      ? props.theme.colors.atention
      : props.theme.colors.backgroundGrey};
  margin-bottom: ${(props) => props.theme.space[2]}px;

  &:hover,
  &:focus {
    box-shadow: var(--card-shadow);
    background-color: white;
  }
`;

export const CompanyName = styled.div`
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: bold;
  text-overflow: clip;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;

export const MenuWrapper = styled.div`
  /* outline: 1px solid tomato; */
  position: absolute;
  display: flex;
  gap: 6px;
  transition: opacity 0.3s ease; /* Плавна анімація зміни прозорості */
  /*  opacity: 1; Початкова прозорість */
  bottom: 0;
  right: 0;

  /* @media screen and (min-width: 680px) {
    opacity: 0;
    } */
`;
export const Code = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};
`;
export const Time = styled.div`
  width: 220px;
  gap: 20px;
  /* outline: 1px solid tomato; */
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.xs};

  p {
    display: inline-block;
  }
`;
