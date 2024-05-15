import React, { useContext } from "react";
import AppContext from "../context/AppContext";

// useReducer + useContextで値を呼び出す
const CompC = () => {
  const { dispatchProvided } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => dispatchProvided("add_1")}>ADD + 1</button>
    </div>
  );
};

export default CompC;
