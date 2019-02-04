import * as React from "react";
import { connect } from "react-redux";

import { toggleModal } from "../../../../state/UI/actions";
import { putAppoint } from "../../../../state/appoints/actions";

import {
  ModalContentWrapper,
  ModalHeader,
  FormWrapper,
  AddButton,
  CloseModalButton,
  ErrorText
} from "../MakeAnAppointmentCSS";

import AppointColorPicker from "../../../components/AppointColorPicker/AppointColorPicker";
import AppointTimePicker from "../../../components/AppointTimePicker/AppointTimePicker";

import { Dispatch } from "redux";
import { Appoint } from "../../../../models/state/State";

interface P {
  routineName: string;
  appoint: Appoint;
  dispatch: Dispatch<any>;
}

interface S {
  startTime: number;
  finishTime: number;
  labelColor: string;
  errorText: string;
}

class ChangeAnAppointment extends React.Component<P, S> {
  public state = {
    startTime: this.props.appoint.startTime,
    finishTime: this.props.appoint.finishTime,
    labelColor: this.props.appoint.labelColor,
    errorText: ""
  };
  public closeModal = () => {
    this.props.dispatch(toggleModal());
  };

  public changeAnAppointment = () => {
    if (this.state.finishTime < this.state.startTime) {
      this.setState({
        errorText: "Start time cannot be later than finish time"
      });
    } else {
      this.props.dispatch(
        putAppoint({
          ...this.props.appoint,
          appointName: this.props.routineName,
          ...this.state
        })
      );
      this.closeModal();
    }
  };

  public getTime = (time: string, label: string) => {
    this.setState({
      errorText: ""
    });
    if (label === "startTime") {
      this.setState({
        startTime: Number(time.slice(0, 2)) * 60 + Number(time.slice(3))
      });
    } else {
      this.setState({
        finishTime: Number(time.slice(0, 2)) * 60 + Number(time.slice(3))
      });
    }
  };

  public onColorClick = (e: any) => {
    this.setState({
      labelColor: e.target.attributes.color.value
    });
  };

  public render() {
    const appoint = { ...this.props.appoint };
    return (
      <React.Fragment>
        <CloseModalButton className="fas fa-times" onClick={this.closeModal} />
        <ModalContentWrapper>
          <ModalHeader>Updating appointment</ModalHeader>
          <ErrorText>{this.state.errorText}</ErrorText>
          <FormWrapper>
            <AppointTimePicker
              startTime={appoint.startTime}
              finishTime={appoint.finishTime}
              getTime={this.getTime}
              labelColor={
                this.state.labelColor
                  ? this.state.labelColor
                  : appoint.labelColor
              }
            />
            <AppointColorPicker
              activeColor={this.state.labelColor}
              onColorClick={this.onColorClick}
            />
            <AddButton onClick={this.changeAnAppointment}>UPDATE</AddButton>
          </FormWrapper>
        </ModalContentWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    appoint: state.ui.modal.content,
    routineName: state.ui.modal.content.routineName
  };
};

export default connect(mapStateToProps)(ChangeAnAppointment);
