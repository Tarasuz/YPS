import styled from "styled-components";

export const RoutineInput = styled.input`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: rgba(57, 63, 84, 0.8);
  border: none;
  font-size: 1.3em;
  color: #83a3ff;
`;

export const RoutineForm = styled.form`
  display: flex;
  padding: 8px 0;
`;

export const AddRoutineIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  color: #000b29;
  width: 20%;
  background: #fadd68;
`;
