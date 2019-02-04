import * as React from "react";
import { connect } from "react-redux";

import { toggleModal, changeModalContent } from "../../../../state/UI/actions";
import { removeAppoint } from "../../../../state/appoints/actions";

import { fromNumToTime } from "../../../../utils/fromNumToTime";

import {
  RoutineItemWrapper,
  AppointmentItemTimeWrapper,
  AppointmentItemTime,
  AppointmentItemText,
  DeleteButton
} from "./AppointmentItemCSS";

import { Appoint } from "../../../../models/state/State";
import { Dispatch } from "redux";

interface P {
  appointment: Appoint;
  dispatch: Dispatch<any>;
}

const AppointmentItem = (props: P) => {
  const changeAppointment = () => {
    props.dispatch(toggleModal("changeAppoint"));
    props.dispatch(
      changeModalContent({
        ...props.appointment,
        routineName: props.appointment.appointName
      })
    );
  };

  const deleteAppointment = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    props.dispatch(removeAppoint(props.appointment.id));
  };
  const { appointName, startTime, finishTime, labelColor } = props.appointment;
  return (
    <RoutineItemWrapper onClick={changeAppointment} label={labelColor}>
      <AppointmentItemText>{appointName}</AppointmentItemText>
      <AppointmentItemTimeWrapper>
        <AppointmentItemTime>{fromNumToTime(startTime)}</AppointmentItemTime>
        <AppointmentItemTime>{fromNumToTime(finishTime)}</AppointmentItemTime>
      </AppointmentItemTimeWrapper>
      <DeleteButton className="fas fa-times" onClick={deleteAppointment} />
    </RoutineItemWrapper>
  );
};

export default connect(null)(AppointmentItem);
