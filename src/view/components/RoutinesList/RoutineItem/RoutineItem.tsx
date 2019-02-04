import * as React from "react";
import { connect } from "react-redux";

import { removeRoutine } from "../../../../state/routines/actions";

import { toggleModal, changeModalContent } from "../../../../state/UI/actions";

import {
  RoutineItemText,
  RoutineItemContainer,
  DeleteButton
} from "./RoutineItemCSS";

import { Routine } from "../../../../models/state/State";
import { Dispatch } from "redux";

interface P {
  routine: Routine;
  dispatch: Dispatch<any>;
}

const RoutineItem = (props: P) => {
  const makeAnAppointment = () => {
    props.dispatch(toggleModal("addRoutine"));
    props.dispatch(changeModalContent({ routineName }));
  };

  const deleteRoutine = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    props.dispatch(removeRoutine(props.routine.id));
  };
  const routineName = props.routine.routineName;
  return (
    <RoutineItemContainer onClick={makeAnAppointment}>
      <RoutineItemText>{routineName}</RoutineItemText>
      <DeleteButton className="fas fa-times" onClick={deleteRoutine} />
    </RoutineItemContainer>
  );
};

export default connect(null)(RoutineItem);
