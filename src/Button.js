import React from "react";

const Button = (props) => {
  console.log(`Render ${props.children}`);
  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default React.memo(Button);
