import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import InputBox from "./Component/InputBox/InputBox";
import NewOutputBox from "./Component/OutputBox/NewOutputBox";
import { GetData, PostData, DeleteData } from "./Component/Https/Https";

function App() {
  const [EnteredInput, setEnteredInput] = useState([]);

  const FetchData = useCallback(async () => {
    try {
      const resolve = await GetData();
      console.log("app.jss", resolve);
      const transformData = [];
      for (let key in resolve.data) {
        let value = {
          name: resolve.data[key].name,
          uuid: key,
          id: resolve.data[key].id,
        };
        transformData.push(value);
      }
      setEnteredInput(transformData);
    } catch (error) {}
  }, []);

  const InputHandler = (inputData) => {
    PostData(inputData);
  };

  const DeleteHandler = (deleteData) => {
    DeleteData(deleteData);
  };
  useEffect(() => {
    FetchData();
  }, [EnteredInput]);
  return (
    <div className="app">
      <Header />
      <InputBox onInputHandler={InputHandler} />
      <NewOutputBox items={EnteredInput} onDeleteHandler={DeleteHandler} />
    </div>
  );
}

export default App;
