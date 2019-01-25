import styled from "styled-components";

export const Wrapper = styled.ul`
  transition: width 0.5s;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  overflow: scroll;
  max-height: 90%;
  width: auto;
  overflow-x: hidden;
  margin-right: -17px;

  @media (max-height: 823px) {
    max-height: 82%;
    margin-right: 0;
  }
`;
