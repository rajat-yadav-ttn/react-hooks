import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    incCount,
  }));

  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={() => incCount()}>Inc .Count</button> <h3>{count}</h3>
    </div>
  );
});

const Imperative = () => {
  const ref = useRef();
  return (
    <div>
      <Counter ref={ref} />
      <button onClick={() => ref.current.incCount()}>
        Second Button for inc. count
      </button>
    </div>
  );
};

export default Imperative;
