import React, { useState } from "react";
//General rules of hooks
//- 'use'  in the beginning
//- component name must be in uppercase
//- must be in function/component body
//- cannot call conditionally

//useState - function
//it returns array : [state value we use,function]
const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello everyone");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
