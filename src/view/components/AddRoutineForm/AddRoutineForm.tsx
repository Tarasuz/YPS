import * as React from "react";

import { RoutineInput, RoutineForm, AddRoutineIcon } from "./AddRoutineFormCSS";

interface P {
  routineName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
  addRoutine: (e: React.MouseEvent<HTMLElement>) => void;
}

const DashboardSidebar = (props: P) => {
  return (
    <RoutineForm onSubmit={props.handleSubmit}>
      <RoutineInput
        type="text"
        id="routineName"
        onChange={props.handleChange}
        placeholder="Add routine..."
        value={props.routineName}
      />
      <AddRoutineIcon className="fas fa-plus" onClick={props.addRoutine} />
    </RoutineForm>
  );
};

export default DashboardSidebar;
