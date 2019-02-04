import * as React from "react";

import TimePicker from "../UI/TimePicker/TimePicker";
import { fromNumToTime } from "../../../utils/fromNumToTime";

import {
  TimePickerWrapper,
  TimePickerFrom,
  TimeHeader,
  TimePickerTo
} from "./AppointTimePickerCSS";

interface P {
  getTime: (time: string, label: string) => void;
  labelColor: string;
  startTime?: number;
  finishTime?: number;
}

const AppointTimePicker = (props: P) => {
  return (
    <TimePickerWrapper>
      <TimePickerFrom>
        <TimeHeader>From</TimeHeader>
        <TimePicker
          startPositionOfHours={
            props.startTime ? fromNumToTime(props.startTime).slice(0, 2) : "00"
          }
          startPositionOfMinutes={
            props.startTime ? fromNumToTime(props.startTime).slice(3, 5) : "00"
          }
          color={props.labelColor}
          label="startTime"
          getTime={(time: string, label: string) => props.getTime(time, label)}
        />
      </TimePickerFrom>
      <TimePickerTo>
        <TimeHeader>To</TimeHeader>
        <TimePicker
          startPositionOfHours={
            props.finishTime
              ? fromNumToTime(props.finishTime).slice(0, 2)
              : "00"
          }
          startPositionOfMinutes={
            props.finishTime
              ? fromNumToTime(props.finishTime).slice(3, 5)
              : "00"
          }
          color={props.labelColor}
          label="finishTime"
          getTime={(time: string, label: string) => props.getTime(time, label)}
        />
      </TimePickerTo>
    </TimePickerWrapper>
  );
};

export default AppointTimePicker;
