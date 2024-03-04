import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
    </div>
  );
};
export default Counter;
