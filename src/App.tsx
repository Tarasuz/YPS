import * as React from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";

import { openSidebar, closeSidebar } from "./state/UI/actions";
import { fetchAppointsIfNeeded } from "./state/appoints/actions";
import { fetchRoutinesIfNeeded } from "./state/routines/actions";

import DashboardSidebar from "./view/screens/DashboardSidebar/DashboardSidebar";
import DashboardMain from "./view/screens/DashboardMain/DashboardMain";
import DashBoardToolbar from "./view/components/Toolbar/DashboardToolbar";
import DashBoardModal from "./view/screens/DashBoardModal/DashBoardModal";

import { Wrapper } from "./AppCSS";

import { Dispatch } from "redux";
import { State } from "./models/state/State";
type SideBar = boolean;

interface P {
  sideBar: SideBar;
  modalIsActive: boolean;
  dispatch: Dispatch<any>;
}

class App extends React.Component<P, {}> {
  public componentDidMount() {
    this.props.dispatch(fetchAppointsIfNeeded());
    this.props.dispatch(fetchRoutinesIfNeeded());
  }

  public openSidebar = () => {
    this.props.dispatch(openSidebar());
  };
  public closeSidebar = () => {
    this.props.dispatch(closeSidebar());
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

export default connect(mapStateToProps)(App);
