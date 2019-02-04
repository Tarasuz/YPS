export const fromPercentToTimeString = (
  sliderId: string,
  percentSliderPosition: number
) => {
  let sliderSegmentation = 0;
  if (sliderId === "Hours") {
    sliderSegmentation = 100 / 23;
  } else if (sliderId === "Minutes") {
    sliderSegmentation = 100 / 59;
  }
  let time = String(Math.round(percentSliderPosition / sliderSegmentation));
  if (time.length < 2) {
    time = "0".concat(time);
  }
  return time;
};
