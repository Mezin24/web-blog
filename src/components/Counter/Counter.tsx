import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className={styles.title}>Counter: {counter}</h1>
      <button
        className={styles.btn}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        increment
      </button>
    </div>
  );
};
export default Counter;
