export const COUNTER_INCREMENT_COUNTER = 'COUNTER_INCREMENT_COUNTER';
export const COUNTER_DECREMENT_COUNTER = 'COUNTER_DECREMENT_COUNTER';
export const COUNTER_DEFAULT_STATE = 'COUNTER_DEFAULT_STATE';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

export interface DecrementCounterAction {
  type: typeof COUNTER_DECREMENT_COUNTER;
}

export interface IncrementCounterAction {
  type: typeof COUNTER_INCREMENT_COUNTER;
}

export interface DefaultState {
  type: typeof COUNTER_DEFAULT_STATE;
}

export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction
  | DefaultState;
