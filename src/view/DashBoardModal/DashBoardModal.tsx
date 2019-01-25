import * as React from "react";
import { connect } from "react-redux";

import MakeAnAppointment from "./MakeAnAppointment";
import ChangeAppointment from "./ChangeAppointmentModal";

import { State } from "../../models/state/State";

interface Props {
  modalType: string;
}

class DashboardModal extends React.Component<Props, {}> {
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
    return <React.Fragment>{activeModal}</React.Fragment>;
  }
}

const mapStateToProps = (state: State) => {
  return {
    modalType: state.ui.modal.modalType
  };
};

export default connect(mapStateToProps)(DashboardModal);
