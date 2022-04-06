import React, { memo } from "react";

const ExpiredNotice = () => {
  console.log("expired render");
  return <div>timeout!!!, please set a new countdown</div>;
};

export default memo(ExpiredNotice);
