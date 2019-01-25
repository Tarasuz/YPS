import * as React from "react";

import { ModalOverlay, ModalContent, ModalDialog, Wrapper } from "./ModalCSS";

interface P {
  onClose: () => void;
  overlayStyle?: CSS;
  contentStyle?: CSS;
  dialogStyle?: CSS;
}

class Modal extends React.Component<P, {}> {
  public listenKeyboard = (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      this.props.onClose();
    }
  };

  public componentDidMount = () => {
    if (this.props.onClose) {
      window.addEventListener("keydown", this.listenKeyboard, true);
    }
  };

  public componentWillUnmount = () => {
    if (this.props.onClose) {
      window.removeEventListener("keydown", this.listenKeyboard, true);
    }
  };

  public onOverlayClick = () => {
    this.props.onClose();
  };

  public onDialogClick = (event: any) => {
    event.stopPropagation();
  };

  public render() {
    const overlayStyle = this.props.overlayStyle ? this.props.overlayStyle : {};
    const contentStyle = this.props.contentStyle ? this.props.contentStyle : {};
    const dialogStyle = this.props.dialogStyle ? this.props.dialogStyle : {};
    return (
      <Wrapper>
        <ModalOverlay style={overlayStyle} />
        <ModalContent style={contentStyle} onClick={this.onOverlayClick}>
          <ModalDialog style={dialogStyle} onClick={this.onDialogClick}>
            {this.props.children}
          </ModalDialog>
        </ModalContent>
      </Wrapper>
    );
  }
}

export default Modal;
