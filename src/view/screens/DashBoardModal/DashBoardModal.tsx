import * as React from "react";
import { connect } from "react-redux";

import Modal from "../../components/UI/Modal/Modal";
import MakeAnAppointment from "./MakeAnAppointment/MakeAnAppointment";
import ChangeAppointment from "./ChangeAppointmentModal/ChangeAppointmentModal";

import { toggleModal } from "../../../state/UI/actions";

import { Dispatch } from "redux";
import { State } from "../../../models/state/State";

interface P {
  modalType: string;
  dispatch: Dispatch<any>;
  closeModal: () => void;
}

class DashboardModal extends React.Component<P, {}> {
  public render() {
    let activeModal;
    switch (this.props.modalType) {
      case "addRoutine": {
        activeModal = <MakeAnAppointment />;
        break;
      }
      case "changeAppoint": {
        activeModal = <ChangeAppointment />;
        break;
      }
      default:
        activeModal = null;
    }
    return <Modal onClose={this.props.closeModal}>{activeModal}</Modal>;
  }
}

const mapStateToProps = (state: State) => {
  return {
    modalType: state.ui.modal.modalType
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
)(DashboardModal);
