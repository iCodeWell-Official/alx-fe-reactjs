import { useState } from "react";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default Counter;
