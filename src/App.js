import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const increment2 = () => {
    setCount(previousCount => previousCount + 1);
  };
  const decrement2 = () => {
    setCount(previousCount => previousCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const double = () => {
    setCount(previousCount => previousCount * 2);
  };
  const dev3rest = () => {
    setCount(previousCount => {
      if (previousCount % 3 === 0) {
        return previousCount / 3;
      } else {
        return previousCount;
      }
    });
  };
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={dev3rest}>dev3rest</button>
      </div>
    </>
  );
};

export default App;
