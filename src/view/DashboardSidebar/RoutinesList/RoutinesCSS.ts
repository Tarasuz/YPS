import styled from "styled-components";

export const Wrapper = styled.ul`
  transition: width 0.5s;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  overflow: scroll;
  max-height: 79vh;
  overflow-x: hidden;
  margin-right: -23px;
  width: auto;
  @media (max-height: 823px) {
    margin-right: 0;
  }
  @media (min-height: 1000px) {
    max-height: 85vh;
  }
`;
