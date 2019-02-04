import { Routine } from "../../models/state/State";
import { routineTypes } from "./actions";
import { IntersectionRoutineActions } from "../../models/state/routines/actions";

export const routines = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [] as Routine[]
  },
  action: IntersectionRoutineActions
) => {
  switch (action.type) {
    case routineTypes.ADD_ROUTINE:
      return {
        ...state,
        items: [
          ...state.items,
          {
            routineName: action.routine.routineName,
            id: action.routine.id
          }
        ]
      };
    case routineTypes.INVALIDATE_ROUTINES:
      return { ...state, didInvalidate: true };
    case routineTypes.REQUEST_ROUTINES:
      return { ...state, isFetching: true, didInvalidate: false };
    case routineTypes.RECEIVE_ROUTINES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.routines
      };
    case routineTypes.REMOVE_ROUTINE:
      return {
        ...state,
        items: state.items.filter(routine => {
          return routine.id !== action.id;
        })
      };
    default:
      return state;
  }
};

export default routines;
