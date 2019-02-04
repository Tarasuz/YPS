import { Appoint } from "../../models/state/State";
import { appointsTypes } from "./actions";
import { IntersectionAppointActions } from "../../models/state/appoints/actions";

export const appoints = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [] as Appoint[]
  },
  action: IntersectionAppointActions
) => {
  switch (action.type) {
    case appointsTypes.ADD_APPOINT:
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.appoint
          }
        ]
      };
    case appointsTypes.INVALIDATE_APPOINTS:
      return { ...state, didInvalidate: true };
    case appointsTypes.REQUEST_APPOINTS:
      return { ...state, isFetching: true, didInvalidate: false };
    case appointsTypes.RECEIVE_APPOINTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.appoints
      };
    case appointsTypes.REMOVE_APPOINT:
      return {
        ...state,
        items: state.items.filter(appoint => {
          return appoint.id !== action.id;
        })
      };
    case appointsTypes.UPDATE_APPOINT:
      return {
        ...state,
        items: state.items.map(appoint => {
          if (appoint.id === action.appoint.id) {
            return {
              ...action.appoint
            };
          } else {
            return appoint;
          }
        })
      };
    default:
      return state;
  }
};

export default appoints;
