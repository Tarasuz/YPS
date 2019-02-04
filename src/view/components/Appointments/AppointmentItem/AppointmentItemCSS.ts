import styled from "styled-components";

export const AppointmentItemTimeWrapper = styled.div`
  display: flex;
  padding: 0;
  justify-content: space-around;
`;

export const AppointmentItemTime = styled.span``;

export const AppointmentItemText = styled.p`
  margin: 8px;
  align-self: center;
  @media (min-width: 1024px) {
    margin: 12px 0 0 0;
    align-self: initial;
  }
  @media (min-width: 1300px) {
    font-size: 1.2rem;
    align-self: center;
  }
`;

export const RoutineItemWrapper = styled.li<{
  label?: string;
}>`
  color: ${p => (p.label ? `${p.label}` : "white")};
  font-size: 1.2rem;
  background: #303651;
  border-left: solid 4px ${p => (p.label ? `${p.label}` : "white")};
  min-height: 94px;
  padding: 8px;
  margin: 8px 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 3px -1px rgba(0, 0, 0, 0.2),
      0px 4px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 8px 0px rgba(0, 0, 0, 0.12);
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.2rem;
  }
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
