import * as React from "react";

import { Appoint } from "../../../models/state/State";

import { DaysOfTheWeek } from "../../../models/state/State";

import AppointmentItem from "./AppointmentItem/AppointmentItem";
import { Wrapper } from "./AppointmentListCSS";

interface P {
  appoints: Appoint[];
  filter: string;
}

const AppointmentsList = (props: P) => {
  let appointmentsList;
  props.appoints[0]
    ? (appointmentsList = props.appoints
        .filter(appoint => appoint.dayOfTheWeek === DaysOfTheWeek[props.filter])
        .sort((curItem, nextItem) => curItem.startTime - nextItem.startTime)
        .map(appoint => (
          <AppointmentItem appointment={appoint} key={appoint.id} />
        )))
    : (appointmentsList = null);
  return <Wrapper>{appointmentsList}</Wrapper>;
};

export default AppointmentsList;
