import * as React from "react";

import TimePicker from "../../UI/TimePicker";
import { fromNumToTime } from "../../../helperFunc/fromNumToTime";

import {
  TimePickerWrapper,
  TimePickerFrom,
  TimeHeader,
  TimePickerTo
} from "../MakeAnAppointmentCSS";

interface Props {
  getTime: (time: string, label: string) => void;
  labelColor: string;
  startTime?: number;
  finishTime?: number;
}

class AppointTimePicker extends React.Component<Props, {}> {
  public render() {
    return (
      <TimePickerWrapper>
        <TimePickerFrom>
          <TimeHeader>From</TimeHeader>
          <TimePicker
            startPositionOfHours={
              this.props.startTime
                ? fromNumToTime(this.props.startTime).slice(0, 2)
                : "00"
            }
            startPositionOfMinutes={
              this.props.startTime
                ? fromNumToTime(this.props.startTime).slice(3, 5)
                : "00"
            }
            color={this.props.labelColor}
            label="startTime"
            getTime={(time: string, label: string) =>
              this.props.getTime(time, label)
            }
          />
        </TimePickerFrom>
        <TimePickerTo>
          <TimeHeader>To</TimeHeader>
          <TimePicker
            startPositionOfHours={
              this.props.finishTime
                ? fromNumToTime(this.props.finishTime).slice(0, 2)
                : "00"
            }
            startPositionOfMinutes={
              this.props.finishTime
                ? fromNumToTime(this.props.finishTime).slice(3, 5)
                : "00"
            }
            color={this.props.labelColor}
            label="finishTime"
            getTime={(time: string, label: string) =>
              this.props.getTime(time, label)
            }
          />
        </TimePickerTo>
      </TimePickerWrapper>
    );
  }
}

export default AppointTimePicker;
