import * as React from "react";

import { fromPercentToTimeString } from "../../helperFunc/fromPercentToTime";

import TimePickerSlider from "./TimePickerSlider";

import {
  TimePickerWrapper,
  TimePickerSliderWrapper,
  ValueWrapper
} from "./TimePickerCSS";

interface P {
  startPositionOfHours?: string;
  startPositionOfMinutes?: string;
  color: string;
  label: string;
  getTime: (time: string, label: string) => void;
}

interface S {
  sliderWidthOfHours: string;
  sliderWidthOfMinutes: string;
  [x: string]: string | undefined;
}

class TimePicker extends React.Component<P, S> {
  public state = {
    Hours: this.props.startPositionOfHours,
    sliderWidthOfHours: `${Number(this.props.startPositionOfHours) *
      4.1666666}%`,
    Minutes: this.props.startPositionOfMinutes,
    sliderWidthOfMinutes: `${Number(this.props.startPositionOfMinutes) *
      1.666666666}%`
  };

  public getNewSliderHandlePosition = (
    xSliderAbsolute: number,
    newXHandleAbsolute: number,
    sliderWidth: number
  ) => {
    // x -> x-axis coordinate, absolute means its relative to screen itself, relative means its relative to slider
    let newXHandleRelative = 0;
    const movedAtLeastOnePercent = newXHandleAbsolute - xSliderAbsolute > 3;
    if (movedAtLeastOnePercent) {
      newXHandleRelative = newXHandleAbsolute - xSliderAbsolute;
      if (newXHandleRelative > sliderWidth) {
        return 100;
      }
      const percentHandlePosition = (newXHandleRelative / sliderWidth) * 100;
      return percentHandlePosition;
    }
    return 0;
  };

  public setNewSliderHandlePosition = (
    sliderId: string,
    percentSliderPosition: number
  ) => {
    const time = fromPercentToTimeString(sliderId, percentSliderPosition);
    if (sliderId === "Hours") {
      this.props.getTime(`${time}:${this.state.Minutes}`, this.props.label);
    } else {
      this.props.getTime(`${this.state.Hours}:${time}`, this.props.label);
    }
    this.setState({
      [sliderId]: time,
      [`sliderWidthOf${sliderId}`]: `${percentSliderPosition}%`
    });
  };

  public onSliderClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const newSliderHandlePosition = this.getNewSliderHandlePosition(
      rect.left,
      e.clientX,
      rect.width
    );
    this.setNewSliderHandlePosition(slider.id, newSliderHandlePosition);
  };

  public onSliderHandleClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  public onSliderValueClickHandler = (e: any) => {
    e.stopPropagation();
    const slider = e.target.parentElement;
    const rect = slider.getBoundingClientRect();
    const newSliderHandlePosition = this.getNewSliderHandlePosition(
      rect.left,
      e.clientX,
      rect.width
    );
    this.setNewSliderHandlePosition(slider.id, newSliderHandlePosition);
  };

  public mouseMonitor = (
    event: MouseEvent,
    slider: HTMLDivElement,
    rect: ClientRect | DOMRect
  ) => {
    const newSliderHandlePosition = this.getNewSliderHandlePosition(
      rect.left,
      event.clientX,
      rect.width
    );
    this.setNewSliderHandlePosition(slider.id, newSliderHandlePosition);
  };

  public mouseDownHandler = (event: any) => {
    event.preventDefault();
    const slider = event.target.parentElement;
    const rect = slider.getBoundingClientRect();
    const mouseMonitorEvent = (e: MouseEvent) => {
      this.mouseMonitor(e, slider, rect);
    };
    window.addEventListener("mousemove", mouseMonitorEvent);
    const mouseMonitorEnd = () => {
      window.removeEventListener("mousemove", mouseMonitorEvent);
      window.removeEventListener("mouseup", mouseMonitorEnd);
    };
    event.target.addEventListener("drop", mouseMonitorEnd);
    window.addEventListener("mouseup", mouseMonitorEnd);
  };

  public dragHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  public touchHandler = (e: any) => {
    const slider = e.target.parentElement;
    const rect = slider.getBoundingClientRect();
    const touchMonitorEvent = (event: any) => {
      const touchObj = event.changedTouches[0];
      const newSliderHandlePosition = this.getNewSliderHandlePosition(
        rect.left,
        touchObj.clientX,
        rect.width
      );
      this.setNewSliderHandlePosition(slider.id, newSliderHandlePosition);
    };
    const endTouchMonitorEvent = () => {
      window.removeEventListener("touchmove", touchMonitorEvent);
      window.removeEventListener("touchend", endTouchMonitorEvent);
    };
    window.addEventListener("touchend", endTouchMonitorEvent);
    window.addEventListener("touchmove", touchMonitorEvent);
  };

  public render() {
    return (
      <TimePickerWrapper>
        <TimePickerSliderWrapper>
          <TimePickerSlider
            id="Hours"
            widthOfSlider={this.state.sliderWidthOfHours}
            onSliderClickHandler={this.onSliderClickHandler}
            onSliderValueClickHandler={this.onSliderValueClickHandler}
            onSliderHandleClickHandler={this.onSliderHandleClickHandler}
            mouseDownHandler={this.mouseDownHandler}
            dragHandler={this.dragHandler}
            touchHandler={this.touchHandler}
          />
          <TimePickerSlider
            id="Minutes"
            widthOfSlider={this.state.sliderWidthOfMinutes}
            onSliderClickHandler={this.onSliderClickHandler}
            onSliderValueClickHandler={this.onSliderValueClickHandler}
            onSliderHandleClickHandler={this.onSliderHandleClickHandler}
            mouseDownHandler={this.mouseDownHandler}
            dragHandler={this.dragHandler}
            touchHandler={this.touchHandler}
          />
        </TimePickerSliderWrapper>
        <ValueWrapper>
          <span>{this.state.Hours}</span>
          <span>:</span>
          <span>{this.state.Minutes}</span>
        </ValueWrapper>
      </TimePickerWrapper>
    );
  }
}

export default TimePicker;
