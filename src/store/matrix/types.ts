export const MATRIX_UPDATE_MATRIX = 'MATRIX_UPDATE_MATRIX';
export const MATRIX_SET_TARGET = 'MATRIX_SET_TARGET';

export const ROWS = 4;
export const COLS = 4;

export const TARGET: Position = {
  x: 2,
  y: 2,
};

export type Position = {
  x: number;
  y: number;
};

export const MOVEMENT_KEYS = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
];

export type Movement = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export const STEPS = new Map<string, Position>([
  ['ArrowUp', { x: 0, y: -1 }],
  ['ArrowDown', { x: 0, y: 1 }],
  ['ArrowLeft', { x: -1, y: 0 }],
  ['ArrowRight', { x: 1, y: 0 }],
]);

export type MatrixState = {
  matrix: any[];
  rows: number;
  cols: number;
  target: Position;
};

export interface UpdateMatrixAction {
  type: typeof MATRIX_UPDATE_MATRIX;
  position: Position;
}

export interface SetTargetAction {
  type: typeof MATRIX_SET_TARGET;
  target: Position;
}

export type MatrixActionTypes = UpdateMatrixAction | SetTargetAction;
