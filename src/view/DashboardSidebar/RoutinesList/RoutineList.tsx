import * as React from "react";

import RoutineItem from "./RoutineItem/RoutineItem";
import { Wrapper } from "./RoutinesCSS";

import { Routine } from "../../../models/routine/routine";

interface Props {
  routines: Routine[];
}

class RoutineList extends React.Component<Props, any> {
  public render() {
    let routineList;
    if (this.props.routines[0]) {
      routineList = this.props.routines.map(routine => {
        return <RoutineItem routine={routine} key={routine.id} />;
      });
    } else {
      routineList = null;
    }
    return <Wrapper>{routineList}</Wrapper>;
  }
}

export default RoutineList;
