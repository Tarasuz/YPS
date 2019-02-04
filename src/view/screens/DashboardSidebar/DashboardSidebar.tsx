import * as React from "react";
import { connect } from "react-redux";

import AddRoutineForm from "../../components/AddRoutineForm/AddRoutineForm";
import RoutineList from "../../components/RoutinesList/RoutineList";

import { addNewRoutine } from "../../../state/routines/actions";

import { Wrapper, ContentWrapper, SidebarOverlay } from "./DashboardSidebarCSS";

import { State } from "../../../models/state/State";
import { Routine } from "../../../models/state/State";
import { Dispatch } from "redux";

interface P {
  animationState: string;
  routines: Routine[];
  closeSidebar: () => void;
  dispatch: Dispatch<any>;
}

interface S {
  currentSideBarPosition: number;
  newRoutineName: string;
  prevSidebarPosition?: number;
  touchList: number[];
}

class DashboardSidebar extends React.Component<P, S> {
  public state = {
    currentSideBarPosition: 0,
    newRoutineName: "",
    prevSidebarPosition: undefined,
    touchList: []
  };

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newRoutineName: e.target.value
    });
  };
  public addNewRoutine = (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (this.state.newRoutineName) {
      this.props.dispatch(
        addNewRoutine({
          routineName: this.state.newRoutineName
        })
      );
      this.setState({
        newRoutineName: ""
      });
    } else {
      return;
    }
  };

  public addRoutine = (e: React.MouseEvent<HTMLElement>) => {
    this.addNewRoutine(e);
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    this.addNewRoutine(e);
  };

  public handleTouch = (e: React.TouchEvent) => {
    // watching for user touch movement
    this.setState({
      touchList: [...this.state.touchList, e.changedTouches[0].clientX]
    });
    // if its user first touch -> reset prevSidebarPosition and proceed to watch user next movements
    if (this.state.touchList.length === 0) {
      this.setState({
        prevSidebarPosition: undefined
      });
      return;
    }
    // calculate swipe length
    const touchStartPosition = this.state.touchList[0];
    const touchEndPosition = this.state.touchList[
      this.state.touchList.length - 1
    ];
    const swipeLength = touchEndPosition - touchStartPosition;
    // adjust position for sidebar if user is swiping to the left,  else reset it
    if (swipeLength < 0) {
      this.setState({
        currentSideBarPosition: swipeLength
      });
    } else {
      this.setState({
        currentSideBarPosition: 0
      });
    }
  };
  public handleTouchEnd = (e: React.TouchEvent) => {
    // reset sidebar if swipe length was long enough, else reset is
    if (this.state.currentSideBarPosition < -120) {
      this.props.closeSidebar();
    } else {
      this.setState({
        currentSideBarPosition: 0,
        prevSidebarPosition: this.state.currentSideBarPosition,
        touchList: []
      });
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
          prevSidebarPosition={this.state.prevSidebarPosition}
        >
          <ContentWrapper>
            <AddRoutineForm
              routineName={this.state.newRoutineName}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              addRoutine={this.addNewRoutine}
            />
            <hr />
            <RoutineList routines={this.props.routines} />
          </ContentWrapper>
        </Wrapper>
        <SidebarOverlay
          onClick={this.props.closeSidebar}
          animationState={this.props.animationState}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    routines: state.routines.items
  };
};

export default connect(mapStateToProps)(DashboardSidebar);
