import * as React from "react";
import { connect } from "react-redux";

import * as moment from "moment";

import { toggleModal } from "../../../../state/UI/actions";
import { addNewAppoint } from "../../../../state/appoints/actions";

import {
  ModalContentWrapper,
  ModalHeader,
  FormWrapper,
  AddButton,
  CloseModalButton,
  ErrorText
} from "../MakeAnAppointmentCSS";

import AppointDayPicker from "../../../components/AppointDayPicker/AppointDayPicker";
import AppointColorPicker from "../../../components/AppointColorPicker/AppointColorPicker";
import AppointTimePicker from "../../../components/AppointTimePicker/AppointTimePicker";

import { ModalContent } from "../../../../models/state/State";
import { DaysOfTheWeek } from "../../../../models/state/State";
import { Dispatch } from "redux";
import { State } from "../../../../models/state/State";

interface P {
  dispatch: Dispatch<any>;
  closeModal: () => void;
  modalContent: ModalContent;
}

interface S {
  startTimeNum: number;
  startTime: string;
  finishTimeNum: number;
  finishTime: string;
  labelColor: string;
  dayOfTheWeek: string;
  errorText: string;
  [x: string]: number | string;
}

class MakeAnAppointment extends React.Component<P, S> {
  public state = {
    startTimeNum: 0,
    startTime: "",
    finishTimeNum: 0,
    finishTime: "",
    labelColor: "#83A3FF",
    errorText: "",
    dayOfTheWeek: moment()
      .format("dddd")
      .toLowerCase()
  };
  public closeModal = () => {
    this.props.closeModal();
  };

  public getTime = (time: string, label: string) => {
    this.setState({
      errorText: ""
    });
    this.setState({
      [`${label}`]: time
    });

    this.setState({
      [`${label}Num`]: Number(time.slice(0, 2)) * 60 + Number(time.slice(3))
    });
  };

  public makeAnAppointment = () => {
    if (this.state.finishTime < this.state.startTime) {
      this.setState({
        errorText: "Start time cannot be later than finish time"
      });
    } else {
      this.props.dispatch(
        addNewAppoint({
          appointName: this.props.modalContent.routineName,
          dayOfTheWeek: DaysOfTheWeek[this.state.dayOfTheWeek],
          startTime: this.state.startTimeNum,
          finishTime: this.state.finishTimeNum,
          labelColor: this.state.labelColor
        })
      );
      this.props.closeModal();
    }
  };

  public onColorClick = (e: any) => {
    this.setState({
      labelColor: e.target.attributes.color.value
    });
  };

  public onDayClick = (e: any) => {
    this.setState({
      dayOfTheWeek: e.target.innerText.toLowerCase()
    });
  };

  public render() {
    const { modalContent } = this.props;
    return (
      <React.Fragment>
        <CloseModalButton className="fas fa-times" onClick={this.closeModal} />
        <ModalContentWrapper>
          <ModalHeader>{`Adding ${
            modalContent.routineName
          } to your appoints`}</ModalHeader>
          <ErrorText>{this.state.errorText}</ErrorText>
          <FormWrapper>
            <AppointTimePicker
              getTime={this.getTime}
              labelColor={this.state.labelColor}
            />
            <AppointColorPicker
              activeColor={this.state.labelColor}
              onColorClick={this.onColorClick}
            />
            <AppointDayPicker
              activeDay={this.state.dayOfTheWeek}
              onDayClick={this.onDayClick}
            />
            <AddButton onClick={this.makeAnAppointment}>ADD</AddButton>
          </FormWrapper>
        </ModalContentWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    modalContent: state.ui.modal.content
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
)(MakeAnAppointment);
