import * as React from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";

import { openSidebar, closeSidebar } from "../../state/UI/actions";

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
  openSidebar: () => void;
  closeSidebar: () => void;
}

class Dashboard extends React.Component<P, {}> {
  public openSidebar = () => {
    this.props.openSidebar();
  };
  public closeSidebar = () => {
    this.props.closeSidebar();
  };

  public render() {
    return (
      <Wrapper>
        <Transition
          in={this.props.sideBar}
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={300}
        >
          {state => (
            <DashboardSidebar
              animationState={state}
              closeSidebar={this.closeSidebar}
            />
          )}
        </Transition>
        <DashBoardToolbar toggleSidebar={this.openSidebar} />
        <DashboardMain />
        <Transition
          in={this.props.modalIsActive}
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={3000}
        >
          {state => <DashBoardModal animationState={state} />}
        </Transition>
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
    openSidebar: () => {
      dispatch(openSidebar());
    },
    closeSidebar: () => {
      dispatch(closeSidebar());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
