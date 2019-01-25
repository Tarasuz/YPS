import * as React from "react";

import { ToolbarWrapper, FFIcon, IconWrapper } from "./DashboardToolbarCSS";

interface P {
  toggleSidebar: () => void;
}

class DashboardToolbar extends React.Component<P, {}> {
  public render() {
    return (
      <ToolbarWrapper>
        <IconWrapper onClick={this.props.toggleSidebar}>
          <FFIcon className="fas fa-angle-double-right" />
        </IconWrapper>
      </ToolbarWrapper>
    );
  }
}
export default DashboardToolbar;
