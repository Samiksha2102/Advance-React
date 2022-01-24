import React from "react";

//problems
//- rerendering of component is not done so we see no changes onclick
//- no way to preserve changed value btw renders

// We want 2 thngs
//- to keep value btw renders
//- tigger that rerender
// so here useState comes into play
const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
