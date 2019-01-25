import * as React from "react";

import { DayPicker, DayPickerItem } from "../MakeAnAppointmentCSS";

interface Props {
  activeDay: string;
  onDayClick: (e: React.MouseEvent<HTMLElement>) => void;
}

class AppointDayPicker extends React.Component<Props, {}> {
  public render() {
    const daysOfTheWeek = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
    const daysOfTheWeekList = daysOfTheWeek.map(day => (
      <DayPickerItem
        onClick={this.props.onDayClick}
        key={day}
        active={this.props.activeDay === day}
      >
        {day}
      </DayPickerItem>
    ));
    return <DayPicker>{daysOfTheWeekList}</DayPicker>;
  }
}

export default AppointDayPicker;
