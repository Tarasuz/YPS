import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  AddAppointAction,
  UpdateAppoint,
  DeleteAppoint,
  ReceiveAppoints,
  RequestAppoints,
  InvalidateAppoints,
  UnionAppointActions
} from "../../models/state/appoints/actions";
import { Appoint } from "../../models/routine/routine";
import { State } from "src/models/state/State";
type AppointThunkAction<R> = ThunkAction<
  R,
  State,
  undefined,
  UnionAppointActions
>;

export const appointsTypes = {
  ADD_APPOINT: "ADD_APPOINT",
  REMOVE_APPOINT: "REMOVE_APPOINT",
  REQUEST_APPOINTS: "REQUEST_APPOINTS",
  RECEIVE_APPOINTS: "RECEIVE_APPOINTS",
  INVALIDATE_APPOINTS: "INVALIDATE_APPOINTS",
  UPDATE_APPOINT: "UPDATE_APPOINT"
};

export const addAppoint: ActionCreator<AddAppointAction> = (
  appoint: Appoint
) => {
  return {
    type: appointsTypes.ADD_APPOINT,
    appoint
  };
};

export const addNewAppoint: ActionCreator<AppointThunkAction<void>> = (
  appoint: Appoint
) => {
  const newAppointData = JSON.stringify({
    ...appoint
  });
  return dispatch => {
    return fetch(
      "https://your-personal-schedule.firebaseio.com/appoints/.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: newAppointData
      }
    ).then(response => {
      return response.json().then(body => {
        return dispatch(addAppoint({ ...appoint, id: body.name }));
      });
    });
  };
};
const updateAppoint: ActionCreator<UpdateAppoint> = (appoint: Appoint) => {
  return {
    type: appointsTypes.UPDATE_APPOINT,
    appoint
  };
};

export const putAppoint: ActionCreator<AppointThunkAction<void>> = (
  appoint: Appoint
) => {
  const updatedAppointData = JSON.stringify({
    ...appoint
  });
  return dispatch => {
    return fetch(
      `https://your-personal-schedule.firebaseio.com/appoints/${
        appoint.id
      }.json`,
      {
        method: "Put",
        headers: {
          "Content-Type": "application/json"
        },
        body: updatedAppointData
      }
    ).then(response =>
      response.json().then(() => dispatch(updateAppoint(appoint)))
    );
  };
};
const deleteAppoint: ActionCreator<DeleteAppoint> = (id: string) => {
  return {
    type: appointsTypes.REMOVE_APPOINT,
    id
  };
};

export const removeAppoint: ActionCreator<AppointThunkAction<void>> = (
  id: string
) => {
  const appointId = JSON.stringify({
    id
  });
  return dispatch => {
    return fetch(
      `https://your-personal-schedule.firebaseio.com/appoints/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: appointId
      }
    ).then(response => {
      return response.json().then(() => dispatch(deleteAppoint(id)));
    });
  };
};

export const invalidateAppoints: ActionCreator<InvalidateAppoints> = () => {
  return {
    type: appointsTypes.INVALIDATE_APPOINTS
  };
};

const requestAppoints: ActionCreator<RequestAppoints> = () => {
  return {
    type: appointsTypes.REQUEST_APPOINTS
  };
};

const receiveAppoints: ActionCreator<ReceiveAppoints> = (
  appoints: Appoint[]
): ReceiveAppoints => {
  return {
    type: appointsTypes.RECEIVE_APPOINTS,
    appoints: Object.keys(appoints).map(appointId => {
      return { ...appoints[appointId], id: appointId };
    })
  };
};

const fetchAppoints: ActionCreator<AppointThunkAction<void>> = () => {
  return dispatch => {
    dispatch(requestAppoints());
    return fetch(`https://your-personal-schedule.firebaseio.com/appoints.json`)
      .then(response => response.json())
      .then((appoints: Appoint[]) => dispatch(receiveAppoints(appoints)));
  };
};

const shouldFetchAppoints = (state: State): boolean => {
  const atLeastOneAppoint = () => state.appoints.items.length > 0;
  if (atLeastOneAppoint) {
    return true;
  } else if (state.appoints.isFetching) {
    return false;
  } else {
    return state.appoints.didInvalidate;
  }
};

export const fetchAppointsIfNeeded: ActionCreator<
  AppointThunkAction<void>
> = () => {
  return (dispatch, getState) => {
    if (shouldFetchAppoints(getState())) {
      return dispatch(fetchAppoints());
    }
    return;
  };
};
