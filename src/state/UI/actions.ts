import { UiTypes } from "../../models/state/UI/actions";
import { ModalContent } from "../../models/state/State";

export const uiTypes: UiTypes = {
  OPEN_SIDEBAR: "OPEN_SIDEBAR",
  CLOSE_SIDEBAR: "CLOSE_SIDEBAR",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  CHANGE_MODAL_CONTENT: "CHANGE_MODAL_CONTENT"
};

export const openSidebar = () => {
  return {
    type: uiTypes.OPEN_SIDEBAR
  };
};

export const closeSidebar = () => {
  return {
    type: uiTypes.CLOSE_SIDEBAR
  };
};

export const toggleModal = (modalType = "") => {
  return {
    type: uiTypes.TOGGLE_MODAL,
    modalType
  };
};

export const changeModalContent = (modalContent: ModalContent) => {
  return {
    type: uiTypes.CHANGE_MODAL_CONTENT,
    modalContent
  };
};
