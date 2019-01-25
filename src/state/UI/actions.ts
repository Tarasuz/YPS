import { UiTypes } from "../../models/state/UI/actions";
import { ModalContent } from "../../models/state/State";

export const uiTypes: UiTypes = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  CHANGE_MODAL_CONTENT: "CHANGE_MODAL_CONTENT"
};

export const toggleSidebar = () => {
  return {
    type: uiTypes.TOGGLE_SIDEBAR
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
