import * as React from "react";

import {
  Slider,
  SliderValue,
  SliderHandle,
  SliderLabel
} from "./TimePickerCSS";

interface P {
  id: string;
  widthOfSlider: string;
  onSliderClickHandler: (e: any) => void;
  onSliderValueClickHandler: (e: any) => void;
  onSliderHandleClickHandler: (e: any) => void;
  mouseDownHandler: (e: any) => void;
  dragHandler: (e: any) => void;
  touchHandler: (e: any) => void;
}

const TimePickerSlider = (props: P) => {
  const {
    id,
    widthOfSlider,
    onSliderClickHandler,
    onSliderValueClickHandler,
    onSliderHandleClickHandler,
    mouseDownHandler,
    dragHandler,
    touchHandler
  } = props;
  return (
    <Slider id={id} onClick={onSliderClickHandler}>
      <SliderLabel>{id}</SliderLabel>
      <SliderValue
        style={{
          width: widthOfSlider
        }}
        onClick={onSliderValueClickHandler}
      />
      <SliderHandle
        onClick={onSliderHandleClickHandler}
        onMouseDown={mouseDownHandler}
        onDrag={dragHandler}
        onTouchStart={touchHandler}
        style={{
          left: widthOfSlider
        }}
      />
    </Slider>
  );
};

export default TimePickerSlider;
