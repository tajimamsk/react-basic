import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const C = () => {
  const value = useContext(AppContext);
  return (
    <div>
      <h3>C</h3>
      <div>{value}</div>
    </div>
  );
};

export default C;
