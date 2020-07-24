import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useDebugValue,
} from "react";
import ViewComp from "./ViewComp";
import Counter from "./counter";
import Memo from "./memo";
import Timer from "./Timer";
import CustomHook from "./CustomHook";
import Callback from "./Callback";
import Imperative from "./Imperative";

export const ValueContext = createContext();
export const CountContext = createContext();

const initalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const App = () => {
  const [state, setState] = useState(0);
  const [count, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    console.log("state Changed");
  }, [state]);

  return (
    <div>
      <b>{state}</b> <br />
      <button onClick={() => setState(Math.random())}>Set Random</button>
      <ValueContext.Provider value={state}>
        <ViewComp />
      </ValueContext.Provider>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <Counter />
      </CountContext.Provider>
      <h2>use Memo</h2>
      <Memo />
      <Timer /> {/* uselayout and useRef */}
      <h2>Callback</h2>
      <Callback />
      <h2>use Imperative</h2>
      <Imperative />
      <CustomHook title="Hooks" />
    </div>
  );
};

export default App;
