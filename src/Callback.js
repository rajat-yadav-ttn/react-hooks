import React, { useState, useCallback, useEffect } from "react";
import Button from "./Button";
import Text from "./Text";

const Callback = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(20000);

  const incAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  return (
    <div>
      <Button handleClick={incAge}>Inc. Age</Button>
      <Text data={age}>Age</Text>
      <Button handleClick={incSalary}>Inc. salary</Button>
      <Text data={salary}>salary</Text>
    </div>
  );
};

export default Callback;
