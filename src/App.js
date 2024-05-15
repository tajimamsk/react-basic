import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./components/Basic1";
import Basic2 from "./components/Basic2";
import BasicUseEffect from "./components/BasicUseEffect";
import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./context/AppContext";
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";
import CompB from "./components/CompB";
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1 name="Hooks" /> */}
          {/* <Basic1 name="Today" /> */}
          {/* <Basic2 name="Hooks" /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          Count {count}
          <CompB />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
