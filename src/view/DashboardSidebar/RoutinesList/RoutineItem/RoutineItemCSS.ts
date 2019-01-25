import styled from "styled-components";

export const RoutineItemTimeWrapper = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  padding: 0;
  justify-content: space-around;
`;

export const RoutineItemTime = styled.span<any>`
  margin: 8px;
  color: ${p => (p.color ? `${p.color}` : "black")};
`;

export const RoutineItemText = styled.p`
  margin: 8px;
  align-self: center;
`;

export const RoutineItemContainer = styled.li`
  position: relative;
  margin: 6px 4px;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  background: #303651;
  color: #83a3ff;
  padding: 1em 2em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13);
  cursor: pointer;
`;

export const DeleteButton = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  height: 15.406px;
  color: red;
  font-size: 1.2em;
  opacity: 0.4;
`;
