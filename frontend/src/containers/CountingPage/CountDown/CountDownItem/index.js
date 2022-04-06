import React from "react";

function CountDownItem({ value, type }) {
  return (
    <div className="countdown-item">
      <h3 className="countdown-number">{value}</h3>
      <span>{type}</span>
    </div>
  );
}

export default CountDownItem;
