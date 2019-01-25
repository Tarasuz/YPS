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
  routines: Routine[];
  toggleSidebar: () => void;
  dispatch: Dispatch<any>;
}

class DashboardSidebar extends React.Component<P, any> {
  public componentDidMount() {
    this.props.dispatch(fetchRoutinesIfNeeded());
  }

  public initialHash() {
    "use strict";
    window.location.href = "#";
  }

  // public handleTouch = (e: any) => {
  //   const x = e.changedTouches[0].clientX;
  //   const total: any = e.target.clientWidth;
  //   const position = x - total;
  //   console.log(total, x, position, this);
  //   if (position < 0) {
  //     e.target.style.left = 2 * (x - total) + "px";
  //     if (position < -200) {
  //       this.props.toggleSidebar();
  //     }
  //   } else if (position >= 0) {
  //     e.target.style.left = total + "px";
  //   }
  // };
  // public handleTouchEnd = (e: any) => {
  //   const x = e.changedTouches[0].clientX;
  //   const total = e.target.clientWidth;
  //   const position = x - total;
  //   e.target.style.left = "";
  //   if (position <= -total * 0.5) {
  //     this.props.toggleSidebar();
  //   }
  // };

  public render() {
    return (
      <div>
        <Wrapper
          // onTouchStart={this.handleTouch}
          // onTouchMove={this.handleTouch}
          sideBar={this.props.sideBar}
        >
          <ContentWrapper sideBar={this.props.sideBar}>
            <AddRoutineForm />
            <hr />
            <RoutineList routines={this.props.routines} />
          </ContentWrapper>
        </Wrapper>
        <SidebarOverlay
          onClick={this.props.toggleSidebar}
          sideBar={this.props.sideBar}
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
