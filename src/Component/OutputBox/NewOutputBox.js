import React from "react";
import "./NewOutputBox.css";
import OutputBox from "./OutputBox";

const NewOutputBpx = (props) => {
  return (
    <div className="NewOutput">
      {props.items.map((dataName) => {
        return (
          <OutputBox
            key={dataName.uuid}
            uuid={dataName.uuid}
            name={dataName.name}
            onDeleteHandler={props.onDeleteHandler}
          />
        );
      })}
    </div>
  );
};

export default NewOutputBpx;
