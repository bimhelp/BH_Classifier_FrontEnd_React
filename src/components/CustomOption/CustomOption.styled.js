import styled from "styled-components";
import { setBgColor } from "../../services";

export const Code = styled.span`
  margin-right: 10px;
  padding: ${(props) => props.theme.space[2]}px;
  border-radius: 0 5px 5px 0px;
  display: inline-block;
  min-width: 90px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${setBgColor};
`;
export const HilightDescription = styled.div`
  padding-left: 30px;
  font-size: ${(props) => props.theme.fontSizes.s};
  background-color: ${(props) => props.type === "mark" && "yellow"};
`;
