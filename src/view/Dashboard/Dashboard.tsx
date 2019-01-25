import * as React from "react";
import { connect } from "react-redux";

import { toggleSidebar } from "../../state/UI/actions";

import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import DashboardMain from "../DashboardMain/DashboardMain";
import DashBoardToolbar from "../DashboardToolbar/DashboardToolbar";
import DashBoardModal from "../DashBoardModal/DashBoardModal";

import { Wrapper } from "./DashboardCSS";

import { Dispatch } from "redux";
import { State } from "../../models/state/State";
type SideBar = boolean;

interface P {
  sideBar: SideBar;
  modalIsActive: boolean;
  toggleSidebar: (sideBar: SideBar) => void;
}

class Dashboard extends React.Component<P, {}> {
  public toggleSidebar = () => {
    this.props.toggleSidebar(this.props.sideBar);
  };

  public render() {
    return (
      <Wrapper>
        {this.props.sideBar ? (
          <DashboardSidebar toggleSidebar={this.toggleSidebar} />
        ) : null}
        <DashBoardToolbar toggleSidebar={this.toggleSidebar} />
        <DashboardMain />
        {this.props.modalIsActive ? <DashBoardModal /> : null}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    sideBar: state.ui.sideBar,
    modalIsActive: state.ui.modal.isActive
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSidebar: () => {
      dispatch(toggleSidebar());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
