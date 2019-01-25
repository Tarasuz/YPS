import * as React from "react";

import { Appoint } from "../../../models/routine/routine";

import { DaysOfTheWeek } from "../../../models/routine/routine";

import AppointmentItem from "./AppointmentItem";
import { Wrapper } from "./AppointmentListCSS";

interface P {
  appoints: Appoint[];
  filter: string;
}

class AppointmentsList extends React.Component<P> {
  public render() {
    let appointmentsList;
    this.props.appoints[0]
      ? (appointmentsList = this.props.appoints
          .filter(
            appoint => appoint.dayOfTheWeek === DaysOfTheWeek[this.props.filter]
          )
          .sort((curItem, nextItem) => curItem.startTime - nextItem.startTime)
          .map(appoint => (
            <AppointmentItem appointment={appoint} key={appoint.id} />
          )))
      : (appointmentsList = null);
    return <Wrapper>{appointmentsList}</Wrapper>;
  }
}

export default AppointmentsList;
