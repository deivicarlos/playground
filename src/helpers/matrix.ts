import { Position } from '../store/matrix/types';

// eslint-disable-next-line import/prefer-default-export
export const create2dMatrix = (
  rows: number,
  cols: number,
  target: Position
) => {
  const matrix = [];

  for (let i = 0; i < cols; i += 1) {
    matrix[i] = new Array(rows).fill(false);
  }
  matrix[target.x][target.y] = true;

  return matrix;
};
