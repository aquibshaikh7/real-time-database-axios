import React, { useState } from "react";

import "./InputBox.css";

const InputBox = (props) => {
  const [EnteredText, setEnteredText] = useState("");

  const AddText = (event) => {
    setEnteredText(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    props.onInputHandler({
      name: EnteredText,
      id: Math.random().toString(),
    });

    setEnteredText("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="inputBox">
        <label>Hello User</label>

        <div className="add">
          <input type="text" value={EnteredText} onChange={AddText} />

          <button>ADD</button>
        </div>
      </div>
    </form>
  );
};

export default InputBox;
