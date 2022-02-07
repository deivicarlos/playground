/* eslint-disable import/prefer-default-export */
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  MATRIX_SET_TARGET,
  MATRIX_UPDATE_MATRIX,
  Movement,
  Position,
  SetTargetAction,
  STEPS,
  UpdateMatrixAction,
} from './types';

export const updateMatrix = (position: Position): UpdateMatrixAction => {
  return {
    type: MATRIX_UPDATE_MATRIX,
    position,
  };
};

export const setTarget = (target: Position): SetTargetAction => ({
  type: MATRIX_SET_TARGET,
  target,
});

export const handleMove =
  (
    move: Movement
  ): ThunkAction<
    void,
    RootState,
    null,
    Action<typeof MATRIX_UPDATE_MATRIX | typeof MATRIX_SET_TARGET>
  > =>
  (dispatch, getState) => {
    const {
      matrix: { matrix, target },
    } = getState();

    const position = STEPS.get(move);

    if (!position) {
      return;
    }

    const newX = target.x + position.x;
    const newY = target.y + position.y;

    if (
      newX >= 0 &&
      newX <= matrix[0].length - 1 &&
      newY >= 0 &&
      newY <= matrix.length - 1
    ) {
      const newTargetPosition: Position = {
        x: newX,
        y: newY,
      };

      // matrixToUpdate[target.x][target.y] = false;

      dispatch(updateMatrix(newTargetPosition));
      dispatch(setTarget({ x: newX, y: newY }));
    } else {
      console.log('WALL HIT');
    }
  };

// export const createMatrix =
//   (): ThunkAction<void, RootState, null, Action<typeof MATRIX_UPDATE_MATRIX>> =>
//   dispatch => {
//     const matrix = [];

//     for (let i = 0; i < COLS; i += 1) {
//       matrix[i] = new Array(ROWS).fill(false);
//     }
//     matrix[TARGET.x][TARGET.y] = true;

//     dispatch(setMatrix(matrix));
//   };
