import {
  CounterActionTypes,
  CounterState,
  COUNTER_DECREMENT_COUNTER,
  COUNTER_INCREMENT_COUNTER,
} from './types';

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case COUNTER_INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };

    case COUNTER_DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
