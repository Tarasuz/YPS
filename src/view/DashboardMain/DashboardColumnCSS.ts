import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  background: #21273e;
  overflow: hidden;
  height: 89vh;
  margin: 16px 8px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  @media (max-height: 823px) {
    margin-top: 24px;
    height: 82vh;
  }
`;

export const ColumnHeader = styled.h1`
  padding-top: 0.5em;
  font-size: 1.5em;
  text-transform: uppercase;
  opacity: 0.4;
  color: #83a3ff;
  text-align: center;
`;
