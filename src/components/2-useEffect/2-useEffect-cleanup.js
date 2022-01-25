import React, { useState, useEffect } from "react";

// cleanup function
// second argument - dependency list; if used useEffect is rendered only on initial render

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  //console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render");

  return (
    <React.Fragment>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
