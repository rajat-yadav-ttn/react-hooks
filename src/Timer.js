import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [width, setWidth] = useState(10);
  const [rect, setRect] = useState(null);
  const intervalRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((i) => i + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect().width);
  }, [width]);

  return (
    <div>
      <h2>use Ref</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
      {timer}
      <h2>use Layout Effect</h2>
      <br />
      <br />
      <button onClick={() => setWidth(Math.random() * 50)}>Width</button>
      <div
        ref={divRef}
        style={{
          height: "50px",
          backgroundColor: "yellow",
          width: `${width}px`,
        }}
      ></div>
      Width:{rect}
      <div
        style={{
          background: "pink",
          width: `${rect}px`,
          height: `${rect}px`,
        }}
      ></div>
    </div>
  );
};

export default Timer;
