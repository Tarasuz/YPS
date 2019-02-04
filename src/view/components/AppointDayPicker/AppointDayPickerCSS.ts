import styled from "styled-components";

export const DayPicker = styled.ul`
  color: #83a3ff;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  font-size: 1em;
  justify-content: center;
  margin: 4px 0;
`;

export const DayPickerItem = styled.li<{ active: boolean }>`
  transition: 0.3s;
  min-width: 50px;
  cursor: pointer;
  background: ${p => (p.active ? `#21273e` : "#303651")};
  padding: 24px 10px;
  margin: 1px;
  width: 18.28571%;
  text-transform: capitalize;
  font-weight: 300;
  box-shadow: ${p =>
    p.active
      ? `none`
      : "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"};
`;
