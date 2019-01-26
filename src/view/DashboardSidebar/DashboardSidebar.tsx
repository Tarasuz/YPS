import * as React from "react";
import { connect } from "react-redux";

import AddRoutineForm from "./AddRoutineForm";
import RoutineList from "./RoutinesList/RoutineList";

import { fetchRoutinesIfNeeded } from "../../state/routines/actions";

import { Wrapper, ContentWrapper, SidebarOverlay } from "./DashboardSidebarCSS";

import { State } from "../../models/state/State";
import { Routine } from "../../models/routine/routine";
import { Dispatch } from "redux";

interface P {
  sideBar: boolean;
  animationState: string;
  routines: Routine[];
  closeSidebar: () => void;
  dispatch: Dispatch<any>;
}

interface S {
  currentSideBarPosition: number;
  touchList: any;
}

class DashboardSidebar extends React.Component<P, S> {
  public state = {
    currentSideBarPosition: 0,
    touchList: []
  };

  public componentDidMount() {
    this.props.dispatch(fetchRoutinesIfNeeded());
  }

  public handleTouch = (e: any) => {
    const x = e.changedTouches[0].clientX;
    const total: any = e.target.clientWidth;
    const position = x - total;
    this.setState({
      touchList: [...this.state.touchList, e.changedTouches[0].clientX]
    });

    if (this.state.touchList[0] < 80 || this.state.touchList.length === 0) {
      return;
    }
    if (position >= 0) {
      this.setState({
        currentSideBarPosition: 0
      });
    } else if (position < 0) {
      this.setState({
        currentSideBarPosition: position
      });
    }
  };
  public handleTouchEnd = (e: any) => {
    const touchStartPosition = this.state.touchList[0];
    const touchEndPosition = this.state.touchList[
      this.state.touchList.length - 1
    ];
    if (
      touchEndPosition - touchStartPosition > -80 ||
      isNaN(touchEndPosition - touchStartPosition)
    ) {
      this.setState({
        currentSideBarPosition: 0,
        touchList: []
      });
    } else {
      this.props.closeSidebar();
    }
  };

  public render() {
    return (
      <div>
        <Wrapper
          onTouchMove={this.handleTouch}
          onTouchEnd={this.handleTouchEnd}
          animationState={this.props.animationState}
          currentSideBarPosition={this.state.currentSideBarPosition}
          sideBar={this.props.sideBar}
        >
          <ContentWrapper
            animationState={this.props.animationState}
            sideBar={this.props.sideBar}
            currentSideBarPosition={this.state.currentSideBarPosition}
          >
            <AddRoutineForm />
            <hr />
            <RoutineList routines={this.props.routines} />
          </ContentWrapper>
        </Wrapper>
        <SidebarOverlay
          onClick={this.props.closeSidebar}
          sideBar={this.props.sideBar}
          animationState={this.props.animationState}
          currentSideBarPosition={this.state.currentSideBarPosition}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    sideBar: state.ui.sideBar,
    routines: state.routines.items
  };
};

export default connect(mapStateToProps)(DashboardSidebar);
