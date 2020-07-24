import React, { useContext } from "react";
import { CountContext } from "./App";

const Counter = () => {
  const countContext = useContext(CountContext);
  return (
    <div style={{ margin: "2rem 0" }}>
      <h3>Counter</h3>
      <b>{countContext.countState}</b> <br />
      <button onClick={() => countContext.countDispatch("increment")}>
        Inc.
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Dec.
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
