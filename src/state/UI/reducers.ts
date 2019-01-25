import { combineReducers } from "redux";
import { Modal } from "../../models/state/State";

import {
  ToggleSidebarAction,
  ModalActions
} from "../../models/state/UI/actions";

import { uiTypes } from "./actions";

const sideBar = (state = false, action: ToggleSidebarAction) => {
  switch (action.type) {
    case uiTypes.TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

const initialStateModal = {
  isActive: false,
  modalType: "",
  content: {
    dayOfTheWeek: 0,
    routineName: "",
    id: "",
    labelColor: "",
    startTime: 0,
    finishTime: 0
  }
};

const modal = (state: Modal = initialStateModal, action: ModalActions) => {
  switch (action.type) {
    case uiTypes.TOGGLE_MODAL:
      return {
        ...state,
        isActive: !state.isActive,
        modalType: action.modalType ? action.modalType : ""
      };
    case uiTypes.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        content: {
          ...state.content,
          ...action.modalContent
        }
      };
    default:
      return state;
  }
};

export default combineReducers({ sideBar, modal });
