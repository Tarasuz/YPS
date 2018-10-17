import * as React from "react";

const divStyle = {
  background: "#5C535D",
  width: "14%",
  margin: "16px 8px",
  height: "920px",
  ["border-radius"]: "16px",
  ["box-shadow:"]:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
};

class DashboardColumn extends React.Component<any, any> {
  public render() {
    return <div style={divStyle}>{this.props.nameOfColumn}</div>;
  }
}

export default DashboardColumn;
