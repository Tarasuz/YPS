import * as React from "react";
import { connect } from "react-redux";

import { removeRoutine } from "../../../../state/routines/actions";

import { toggleModal, changeModalContent } from "../../../../state/UI/actions";

import {
  RoutineItemText,
  RoutineItemContainer,
  DeleteButton
} from "./RoutineItemCSS";

import { State } from "../../../../models/state/State";
import { Routine } from "../../../../models/routine/routine";
import { Dispatch } from "redux";

interface P {
  routine: Routine;
  addAnAppointment: (routineName: string) => void;
  dispatch: Dispatch<any>;
}

interface OwnP {
  routine: Routine;
}

class RoutineItem extends React.Component<P, {}> {
  public makeAnAppointment = () => {
    this.props.addAnAppointment(this.props.routine.routineName);
  };

  public deleteRoutine = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    this.props.dispatch(removeRoutine(this.props.routine.id));
  };

  public render() {
    const routineName = this.props.routine.routineName;
    return (
      <RoutineItemContainer onClick={this.makeAnAppointment}>
        <RoutineItemText>{routineName}</RoutineItemText>
        <DeleteButton className="fas fa-times" onClick={this.deleteRoutine} />
      </RoutineItemContainer>
    );
  }
}

const mapStateToProps = (state: State, ownProps: OwnP) => {
  return {
    routine: ownProps.routine
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addAnAppointment: (routineName: string) => {
      dispatch(toggleModal("addRoutine"));
      dispatch(changeModalContent({ routineName }));
    },
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutineItem);
