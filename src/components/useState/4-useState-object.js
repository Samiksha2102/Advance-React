import React, { useState } from "react";
const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "peter",
  //   age: 23,
  //   message: "random message",
  // });

  //setup of multiple state values
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    //setPerson({ ...person, message: "hello world" }); //...person copies old values of person and only message obj is changed
    setMessage("hello world");
  };

  return (
    <React.Fragment>
      {/*<h3>{person.name}</h3>*/}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
