import * as React from "react";

import DashboardColumn from "./DashboardColumn";

class Dashboard extends React.Component {
  public render() {
    const divStyle = {
      display: "flex",
      background: "#999DAB",
      height: "100vw"
    };
    const daysOfWeek = [
      "monday",
      "tuesday",
      "wednasday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
    const columns = daysOfWeek.map(dayOfWeek => {
      return <DashboardColumn key={dayOfWeek} nameOfColumn={dayOfWeek} />;
    });
    return <div style={divStyle}>{columns}</div>;
  }
}

export default Dashboard;
