import styled from "styled-components";

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
