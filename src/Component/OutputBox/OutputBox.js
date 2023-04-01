import React from "react";
import "./OutputBox.css";

const OutputBox = (props) => {
  return (
    <div className="output">
      <div className="name">{props.name}</div>
      <div className="action">
        <button
          onClick={() => {
            props.onDeleteHandler(props.uuid);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OutputBox;
