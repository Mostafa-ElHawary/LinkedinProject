import React from "react";
import "./InputOption.css";
function InputOption({ Icon, title, color }) {
  return (
    <div className="InputOption">
      <Icon className="" style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
