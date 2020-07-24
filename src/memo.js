import React, { useState, useMemo } from "react";

const Memo = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const incX = () => {
    setX(x + 1);
  };

  const incY = () => {
    setY(y + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return x % 2 === 0;
  }, [x]);

  return (
    <div>
      <button onClick={incX}>X:{x}</button>
      {isEven ? `Even` : `Odd`}
      <br />
      <button onClick={incY}>Y:{y}</button>
    </div>
  );
};

export default Memo;
