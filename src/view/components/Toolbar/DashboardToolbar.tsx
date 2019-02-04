import * as React from "react";

import { ToolbarWrapper, FFIcon, IconWrapper } from "./DashboardToolbarCSS";

interface P {
  toggleSidebar: () => void;
}

const DashboardToolbar = (props: P) => {
  return (
    <ToolbarWrapper>
      <IconWrapper onClick={props.toggleSidebar}>
        <FFIcon className="fas fa-angle-double-right" />
      </IconWrapper>
    </ToolbarWrapper>
  );
};
export default DashboardToolbar;
