import React, { useContext } from "react";
import { ValueContext } from "./App";

const CompA = (props) => {
  const val = useContext(ValueContext);
  return <div>{val}</div>;
};

export default CompA;
