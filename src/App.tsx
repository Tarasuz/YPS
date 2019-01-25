import * as React from "react";

import "./App.css";
import Dashboard from "./view/Dashboard/Dashboard";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
