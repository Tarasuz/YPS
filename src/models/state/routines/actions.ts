import { Routine } from "../../routine/routine";

export interface RoutineTypes {
  LOAD_ROUTINES: string;
  ADD_ROUTINE: string;
  REMOVE_ROUTINE: string;
}

export interface ReceiveRoutines {
  type: string;
  routines: Routine[] | [];
}

export interface AddRoutineAction {
  type: string;
  routine: Routine;
}

export interface DeleteRoutine {
  type: string;
  id: string;
}

export interface RequestRoutines {
  type: string;
}

export interface InvalidateRoutines {
  type: string;
}

export type UnionRoutineActions =
  | ReceiveRoutines
  | AddRoutineAction
  | DeleteRoutine
  | RequestRoutines
  | InvalidateRoutines;

export type IntersectionRoutineActions = ReceiveRoutines &
  AddRoutineAction &
  DeleteRoutine &
  RequestRoutines &
  InvalidateRoutines;
