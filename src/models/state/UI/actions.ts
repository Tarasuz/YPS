import { ModalContent } from "../State";

export interface UiTypes {
  OPEN_SIDEBAR: string;
  CLOSE_SIDEBAR: string;
  TOGGLE_MODAL: string;
  CHANGE_MODAL_CONTENT: string;
}

export interface ToggleSidebarAction {
  type: string;
}

export interface ToggleModalAction {
  type: string;
  modalType?: string;
}

export interface ChangeModalContent {
  type: string;
  modalContent: ModalContent;
}

export type ModalActions = ToggleModalAction & ChangeModalContent;
