import React, { useState } from "react";
// short-circuit evaluation - evaluating boolean exp(AND and OR)we as first cond satisfies or negates exp
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}

      {/* {text && <h1>hello</h1>}
         {!text && <h1>hello</h1>}   */}

      <h1>{text || "john doe"}</h1>

      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error!!!</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h3>there is no error</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
