import { useState } from "react";

const Counter = () => {
  const [x, Setx] = useState(0);

  return (
    <div className="outerbox">
      <div>
        <h1 className="number">{x}</h1>
        <button onClick={() => Setx(x + 1)}> INCREMENT </button>
        <button onClick={() => Setx(x - 1)}> DECREMENT </button>
      </div>
    </div>
  );
};
export default Counter;
