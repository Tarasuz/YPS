import styled from "styled-components";

export const ModalContentWrapper = styled.div`
  padding: 0.5em;
  width: 100%;
`;
export const CloseModalButton = styled.i`
  cursor: pointer;
  color: red;
  opacity: 0.4;
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  font-size: 24px;
`;

export const ModalHeader = styled.p`
  font-size: 1em;
  color: #83a3ff;
  margin: 0;
  text-transform: uppercase;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimePickerWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ColorPickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 2px 0 0 0;
`;

export const ColorPicker = styled.div`
  width: 100%;
`;

export const ColorList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const ColorPickerHelpLabel = styled.p`
  font-size: 10px;
  color: #83a3ff;
  margin: 0;
  margin-top: 6px;
  text-align: right;
  width: 94%;
`;

export const ColorPickerItemWrapper = styled.li<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  background: ${p => (p.active ? `#21273e` : "#303651")};
  box-shadow: ${p =>
    p.active
      ? `none`
      : "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"};
  cursor: pointer;
  padding: 8px;
  margin: 2px;
  transition: 0.3s;
  width: ${p => (p.active ? "20%" : "13%")};
`;
export const ColorPickerItem = styled.div<{ color: string }>`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: ${p => (p.color ? `${p.color}` : "gray")};
`;
export const ColorPickerText = styled.p`
  color: #83a3ff;
  margin: 0;
  margin-top: 4px;
`;

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
  width: 14.28571%;
  text-transform: capitalize;
  font-weight: 300;
  box-shadow: ${p =>
    p.active
      ? `none`
      : "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"};
`;

export const TimePickerFrom = styled.div``;

export const TimePickerTo = styled.div``;

export const TimeHeader = styled.h4`
  font-size: 1em;
  color: #83a3ff;
  margin: 0;
  text-transform: uppercase;
`;

export const AddButton = styled.button`
  cursor: pointer;
  font-size: 1.6em;
  font-weight: 600;
  transition: 0.3s;
  border: none;
  height: 54px;
  line-height: 54px;
  font-size: 15px;
  text-decoration: none;
  color: #000b29;
  background-color: #fadd68;
  text-align: center;
  letter-spacing: 0.5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  }
`;
