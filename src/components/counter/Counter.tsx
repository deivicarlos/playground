import { FunctionComponent } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  incrementCounter,
  decrementCounter,
} from '../../store/counter/actions';
import { selectCountSelector } from '../../store/counter/selectors';
import styles from './Counter.module.css';

// eslint-disable-next-line import/prefer-default-export
export const Counter: FunctionComponent = () => {
  const count = useAppSelector(selectCountSelector);
  const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter())}
        >
          +
        </button>
      </div>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
};
