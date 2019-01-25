import { Appoint } from "../../routine/routine";

export interface ReceiveAppoints {
  type: string;
  appoints: Appoint[];
}

export interface AddAppointAction {
  type: string;
  appoint: Appoint;
}

export interface DeleteAppoint {
  type: string;
  id: string;
}

export interface UpdateAppoint {
  type: string;
  appoint: Appoint;
}

export interface RequestAppoints {
  type: string;
}

export interface InvalidateAppoints {
  type: string;
}

export type UnionAppointActions =
  | ReceiveAppoints
  | AddAppointAction
  | UpdateAppoint
  | DeleteAppoint
  | RequestAppoints
  | InvalidateAppoints;

export type IntersectionAppointActions = ReceiveAppoints &
  AddAppointAction &
  UpdateAppoint &
  DeleteAppoint &
  RequestAppoints &
  InvalidateAppoints;
