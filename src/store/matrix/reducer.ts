import { create2dMatrix } from '../../helpers/matrix';
import {
  MatrixActionTypes,
  MatrixState,
  MATRIX_SET_TARGET,
  MATRIX_UPDATE_MATRIX,
  Position,
} from './types';

const ROWS = 10;
const COLS = 10;
const target: Position = {
  x: 2,
  y: 2,
};

const matrix = create2dMatrix(ROWS, COLS, target);

const initialState: MatrixState = {
  matrix,
  rows: ROWS,
  cols: COLS,
  target,
};

const matrixReducer = (
  state = initialState,
  action: MatrixActionTypes
): MatrixState => {
  switch (action.type) {
    case MATRIX_UPDATE_MATRIX: {
      const newMatrix = create2dMatrix(ROWS, COLS, action.position);

      return {
        ...state,
        matrix: newMatrix,
      };
    }

    case MATRIX_SET_TARGET:
      return {
        ...state,
        target: action.target,
      };

    default:
      return state;
  }
};

export default matrixReducer;
