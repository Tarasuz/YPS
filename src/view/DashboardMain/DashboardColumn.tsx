import * as React from "react";

import { ColumnHeader, DashBoardWrapper } from "./DashboardColumnCSS";

import AppointmentsList from "./Appointments/AppointmentList";

import { Appoint } from "../../models/routine/routine";

interface Props {
  nameOfColumn: string;
  appoints: Appoint[];
}

class DashboardColumn extends React.Component<Props, {}> {
  public render() {
    return (
      <DashBoardWrapper>
        <ColumnHeader>{this.props.nameOfColumn}</ColumnHeader>
        <AppointmentsList
          filter={this.props.nameOfColumn}
          appoints={this.props.appoints}
        />
      </DashBoardWrapper>
    );
  }
}

export default DashboardColumn;
