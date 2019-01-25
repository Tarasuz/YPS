import * as React from "react";
import { connect } from "react-redux";
import { addNewRoutine } from "../../state/routines/actions";

import { RoutineInput, RoutineForm, AddRoutineIcon } from "./AddRoutineFormCSS";

import { State } from "../../models/state/State";
import { Dispatch } from "redux";

interface S {
  routineName: string | "";
}

interface P {
  dispatch: Dispatch<any>;
}

class DashboardSidebar extends React.Component<P, S> {
  public state = {
    routineName: ""
  };

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      routineName: e.target.value
    });
  };
  public addNewRoutine = (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (this.state.routineName) {
      this.props.dispatch(
        addNewRoutine({
          routineName: this.state.routineName
        })
      );
      this.setState({
        routineName: ""
      });
    } else {
      return;
    }
  };

  public addRoutine = (e: React.MouseEvent<HTMLElement>) => {
    this.addNewRoutine(e);
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    this.addNewRoutine(e);
  };

  public render() {
    return (
      <RoutineForm onSubmit={this.handleSubmit}>
        <RoutineInput
          type="text"
          id="routineName"
          onChange={this.handleChange}
          placeholder="Add routine..."
          value={this.state.routineName}
        />
        <AddRoutineIcon className="fas fa-plus" onClick={this.addRoutine} />
      </RoutineForm>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { sideBar: state.ui.sideBar };
};

export default connect(mapStateToProps)(DashboardSidebar);
