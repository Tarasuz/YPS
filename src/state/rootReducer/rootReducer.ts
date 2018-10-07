import { State } from "../../models/state/State"

const initialState: State = {
    routines: [{routineName: "buy some milk",
    startTime: 2,
    finishTime:3}]
}

export const rootReducer = (state = initialState) => {
    return state
}