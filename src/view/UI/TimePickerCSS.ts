import styled from "styled-components";

export const Slider = styled.div`
  width: 100%;
  position: relative;
  background-color: #dfe0e4;
  height: 4px;
  cursor: pointer;
`;
export const SliderLabel = styled.p`
  font-size: 10px;
  color: #83a3ff;
  margin: 0;
  margin-top: 6px;
  text-align: right;
`;

export const SliderValue = styled.div`
  transition: 0.1s;
  position: absolute;
  background-color: #83a3ff;
  border-radius: 3px;
  top: 0;
  height: 100%;
`;
export const SliderHandle = styled.div`
  transition: 0.1s;
  position: absolute;
  width: 4px;
  height: 4px;
  top: -10px;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: 3px solid #83a3ff;
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(-10px);
`;

export const TimePickerWrapper = styled.div<any>`
  display: flex;
`;
export const TimePickerSliderWrapper = styled.div<any>`
  width: 75%;
  padding: 16px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ValueWrapper = styled.div`
  font-size: 2em;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  background: #21273e;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #83a3ff;
  width: 25%;
`;
