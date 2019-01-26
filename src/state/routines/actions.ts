import { Routine } from "../../models/routine/routine";

import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { State } from "../../models/state/State";

import {
  AddRoutineAction,
  DeleteRoutine,
  ReceiveRoutines,
  RequestRoutines,
  InvalidateRoutines,
  IntersectionRoutineActions
} from "../../models/state/routines/actions";

type RoutineThunkAction<R> = ThunkAction<
  R,
  State,
  undefined,
  IntersectionRoutineActions
>;

export const routineTypes = {
  ADD_ROUTINE: "ADD_ROUTINE",
  REMOVE_ROUTINE: "REMOVE_ROUTINE",
  REQUEST_ROUTINES: "REQUEST_ROUTINES",
  RECEIVE_ROUTINES: "RECEIVE_ROUTINES",
  INVALIDATE_ROUTINES: "INVALIDATE_ROUTINES"
};

export const addRoutine: ActionCreator<AddRoutineAction> = (
  routine: Routine
) => {
  return {
    type: routineTypes.ADD_ROUTINE,
    routine
  };
};

export const addNewRoutine: ActionCreator<RoutineThunkAction<void>> = (
  routine: Routine
) => {
  const newRoutineData = JSON.stringify({
    routineName: routine.routineName
  });
  return (dispatch: Dispatch) => {
    return fetch(
      "https://your-personal-schedule.firebaseio.com/routines.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: newRoutineData
      }
    ).then(response =>
      response
        .json()
        .then(body => dispatch(addRoutine({ ...routine, id: body.name })))
    );
  };
};
const deleteRoutine: ActionCreator<DeleteRoutine> = (id: string) => {
  return {
    type: routineTypes.REMOVE_ROUTINE,
    id
  };
};

export const removeRoutine: ActionCreator<RoutineThunkAction<void>> = (
  id: string
) => {
  console.log(id);
  const routineId = JSON.stringify({
    id
  });
  return (dispatch: Dispatch) => {
    return fetch(
      `https://your-personal-schedule.firebaseio.com/routines/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: routineId
      }
    ).then(response => response.json().then(() => dispatch(deleteRoutine(id))));
  };
};

export const invalidateRoutines: ActionCreator<InvalidateRoutines> = () => {
  return {
    type: routineTypes.INVALIDATE_ROUTINES
  };
};

const requestRoutines: ActionCreator<RequestRoutines> = () => {
  return {
    type: routineTypes.REQUEST_ROUTINES
  };
};

const receiveRoutines: ActionCreator<ReceiveRoutines> = (
  routines: Routine[]
) => {
  return {
    type: routineTypes.RECEIVE_ROUTINES,
    routines: routines
      ? Object.keys(routines).map(routineId => {
          return { ...routines[routineId], id: routineId };
        })
      : []
  };
};

const fetchRoutines: ActionCreator<RoutineThunkAction<void>> = () => {
  return (dispatch: Dispatch) => {
    dispatch(requestRoutines());
    return fetch(`https://your-personal-schedule.firebaseio.com/routines.json`)
      .then(response => response.json())
      .then(routines => dispatch(receiveRoutines(routines)));
  };
};

const shouldFetchRoutines = (state: State): boolean => {
  const atLeastOneAppoint = () => state.routines.items.length > 0;
  if (atLeastOneAppoint) {
    return true;
  } else if (state.routines.isFetching) {
    return false;
  } else {
    return state.routines.didInvalidate;
  }
};

export const fetchRoutinesIfNeeded: ActionCreator<
  RoutineThunkAction<void>
> = () => {
  return (dispatch, getState) => {
    if (shouldFetchRoutines(getState())) {
      return dispatch(fetchRoutines());
    }
    return;
  };
};
