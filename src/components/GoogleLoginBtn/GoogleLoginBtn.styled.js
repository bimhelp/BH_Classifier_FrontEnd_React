import styled from "styled-components";
import google from "../../img/google.png";
export const GoogleLink = styled.a`
  position: absolute;
  top: 30px;
  padding: 2px;
  height: 33px;
  background-color: rgb(255, 255, 255);
  width: 106px;
  box-shadow: lightgray 0px 1px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 18px;
  color: rgb(92, 108, 117);
  border-radius: 5px;
  border: none;
  right: 9px;

  &:before {
    content: "";
    display: inline-block;
    margin-left: 0px;
    margin-right: 5px;
    width: 32px;
    height: 32px;
    background-image: url(${google});
  }
`;
