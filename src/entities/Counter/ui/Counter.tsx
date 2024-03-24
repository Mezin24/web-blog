import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  const increment = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  return (
    <div>
      <h1 data-testid='value-title'>{counter}</h1>
      <Button
        data-testid='decrement-btn'
        theme={ButtonTheme.OUTLINE}
        onClick={decrement}
      >
        -
      </Button>
      <Button
        data-testid='increment-btn'
        theme={ButtonTheme.OUTLINE}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};
