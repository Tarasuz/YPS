import * as React from "react";

import { DayPicker, DayPickerItem } from "./AppointDayPickerCSS";

interface P {
  activeDay: string;
  onDayClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const AppointDayPicker = (props: P) => {
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
      onClick={props.onDayClick}
      key={day}
      active={props.activeDay === day}
    >
      {day}
    </DayPickerItem>
  ));
  return <DayPicker>{daysOfTheWeekList}</DayPicker>;
};

export default AppointDayPicker;
