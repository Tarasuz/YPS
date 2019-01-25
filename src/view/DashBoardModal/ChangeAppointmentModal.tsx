import * as React from "react";
import { connect } from "react-redux";

import { toggleModal } from "../../state/UI/actions";
import { putAppoint } from "../../state/appoints/actions";

import {
  ModalContentWrapper,
  ModalHeader,
  FormWrapper,
  AddButton,
  CloseModalButton
} from "./MakeAnAppointmentCSS";

import Modal from "../UI/Modal";
import AppointColorPicker from "./ModalComponents/AppointColorPicker";
import AppointTimePicker from "./ModalComponents/AppointTimePicker";

import { Dispatch } from "redux";
import { Appoint } from "../../models/routine/routine";

interface P {
  routineName: string;
  appoint: Appoint;
  closeModal: () => void;
  dispatch: Dispatch<any>;
}

interface S {
  startTime: number;
  finishTime: number;
  labelColor: string;
}

class ChangeAnAppointment extends React.Component<P, S> {
  public state = {
    startTime: this.props.appoint.startTime,
    finishTime: this.props.appoint.finishTime,
    labelColor: this.props.appoint.labelColor
  };
  public closeModal = () => {
    this.props.closeModal();
  };

  public changeAnAppointment = () => {
    this.props.dispatch(
      putAppoint({
        ...this.props.appoint,
        appointName: this.props.routineName,
        ...this.state
      })
    );
    this.props.closeModal();
  };

  public getTime = (time: string, label: string) => {
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
      <Modal onClose={this.closeModal}>
        <CloseModalButton className="fas fa-times" onClick={this.closeModal} />
        <ModalContentWrapper>
          <ModalHeader>Updating appointment</ModalHeader>
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
      </Modal>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    appoint: state.ui.modal.content,
    routineName: state.ui.modal.content.routineName
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    closeModal: () => {
      dispatch(toggleModal());
    },
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeAnAppointment);
