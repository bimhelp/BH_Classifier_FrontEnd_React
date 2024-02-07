import styled from "styled-components";

export const MainTableWrapper = styled.div`
  /* outline: 1px solid red; */
  max-height: 85vh;
  overflow: scroll;
  margin-left: -${(props) => props.theme.space[4]}px;
`;
