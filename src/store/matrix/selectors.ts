import { RootState } from '../store';

export const matrixSelector = (state: RootState) => state.matrix.matrix;

export const targetSelector = (state: RootState) => state.matrix.target;
