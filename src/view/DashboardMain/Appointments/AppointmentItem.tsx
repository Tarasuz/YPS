import * as React from "react";
import { connect } from "react-redux";

import { toggleModal, changeModalContent } from "../../../state/UI/actions";
import { removeAppoint } from "../../../state/appoints/actions";

import { fromNumToTime } from "../../../helperFunc/fromNumToTime";

import {
  RoutineItemWrapper,
  AppointmentItemTimeWrapper,
  AppointmentItemTime,
  AppointmentItemText,
  DeleteButton
} from "./AppointmentItemCSS";

import { State } from "../../../models/state/State";
import { Appoint } from "../../../models/routine/routine";
import { ModalContent } from "../../../models/state/State";
import { Dispatch } from "redux";

interface P {
  appointment: Appoint;
  changeAppointment: () => void;
  changeModalContent: (modalContent: ModalContent) => void;
  dispatch: Dispatch<any>;
}

interface OwnP {
  appointment: Appoint;
}

class AppointmentItem extends React.Component<P, {}> {
  public changeAppointment = () => {
    this.props.changeAppointment();
    this.props.changeModalContent({
      ...this.props.appointment,
      routineName: this.props.appointment.appointName
    });
  };

  public deleteAppointment = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.props.dispatch(removeAppoint(this.props.appointment.id));
  };

  public render() {
    const {
      appointName,
      startTime,
      finishTime,
      labelColor
    } = this.props.appointment;
    return (
      <RoutineItemWrapper onClick={this.changeAppointment} label={labelColor}>
        <AppointmentItemText>{appointName}</AppointmentItemText>
        <AppointmentItemTimeWrapper>
          <AppointmentItemTime>{fromNumToTime(startTime)}</AppointmentItemTime>
          <AppointmentItemTime>{fromNumToTime(finishTime)}</AppointmentItemTime>
        </AppointmentItemTimeWrapper>
        <DeleteButton
          className="fas fa-times"
          onClick={this.deleteAppointment}
        />
      </RoutineItemWrapper>
    );
  }
}

const mapStateToProps = (state: State, ownProps: OwnP) => {
  return {
    appointment: ownProps.appointment
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeAppointment: () => {
      dispatch(toggleModal("changeAppoint"));
    },
    changeModalContent: (modalContent: ModalContent) => {
      dispatch(changeModalContent(modalContent));
    },
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentItem);
