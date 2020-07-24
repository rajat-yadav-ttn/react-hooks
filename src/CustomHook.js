import React, { useState, useCallback, useMemo, useEffect } from "react";
import useTitle from "./useTitle";

const CustomHook = ({ title }) => {
  useTitle(title);
  return <div></div>;
};

export default CustomHook;
