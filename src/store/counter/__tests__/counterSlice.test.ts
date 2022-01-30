import { decrementCounter, incrementCounter } from '../actions';
import counterReducer from '../reducer';
import { CounterState, COUNTER_DEFAULT_STATE } from '../types';

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: COUNTER_DEFAULT_STATE })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, incrementCounter());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrementCounter());
    expect(actual.value).toEqual(2);
  });
});
