import { RootState } from '../store';

// eslint-disable-next-line import/prefer-default-export
export const selectCountSelector = (state: RootState) => state.counter.value;
