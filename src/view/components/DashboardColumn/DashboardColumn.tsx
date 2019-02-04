import * as React from "react";

import { ColumnHeader, DashBoardWrapper } from "./DashboardColumnCSS";

import AppointmentsList from "../Appointments/AppointmentList";

import { Appoint } from "../../../models/state/State";

interface P {
  nameOfColumn: string;
  appoints: Appoint[];
}

const DashboardColumn = (props: P) => {
  return (
    <DashBoardWrapper>
      <ColumnHeader>{props.nameOfColumn}</ColumnHeader>
      <AppointmentsList filter={props.nameOfColumn} appoints={props.appoints} />
    </DashBoardWrapper>
  );
};

export default DashboardColumn;
