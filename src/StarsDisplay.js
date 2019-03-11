import React from "react";
import { utils } from "./utils";

const StarsDisplay = props => (
  <React.Fragment>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </React.Fragment>
);

export default StarsDisplay;
