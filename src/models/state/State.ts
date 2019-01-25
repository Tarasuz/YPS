import { Routine, Appoint, DaysOfTheWeek } from "../routine/routine";

export interface ModalContent {
  dayOfTheWeek?: DaysOfTheWeek;
  routineName: string;
  id?: string;
  labelColor?: string;
  startTime?: number;
  finishTime?: number;
}

export interface Modal {
  isActive: boolean;
  modalType: string;
  content: ModalContent;
}

interface Routines {
  items: Routine[];
  isFetching: boolean;
  didInvalidate: boolean;
}
interface Appoints {
  items: Appoint[];
  isFetching: boolean;
  didInvalidate: boolean;
}

export interface State {
  routines: Routines & {};
  appoints: Appoints & {};
  ui: {
    sideBar: boolean;
    modal: Modal;
  };
}
