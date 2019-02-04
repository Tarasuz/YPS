import * as React from "react";

import RoutineItem from "./RoutineItem/RoutineItem";
import { Wrapper } from "./RoutinesCSS";

import { Routine } from "../../../models/state/State";

interface P {
  routines: Routine[];
}

const RoutineList = (props: P) => {
  let routineList;
  if (props.routines[0]) {
    routineList = props.routines.map(routine => {
      return <RoutineItem routine={routine} key={routine.id} />;
    });
  } else {
    routineList = null;
  }
  return <Wrapper>{routineList}</Wrapper>;
};

export default RoutineList;
