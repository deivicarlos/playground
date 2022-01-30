import {
  COUNTER_DECREMENT_COUNTER,
  COUNTER_INCREMENT_COUNTER,
  DecrementCounterAction,
  IncrementCounterAction,
} from './types';

export const incrementCounter = (): IncrementCounterAction => ({
  type: COUNTER_INCREMENT_COUNTER,
});

export const decrementCounter = (): DecrementCounterAction => ({
  type: COUNTER_DECREMENT_COUNTER,
});
