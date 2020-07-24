import React from "react";

const Text = (props) => {
  console.log(`Render ${props.children}`);
  return <b>{props.data}</b>;
};

export default React.memo(Text);
