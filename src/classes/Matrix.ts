/* eslint-disable class-methods-use-this */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// export type Position = {
//   x: number;
//   y: number;
// };

// export const MOVEMENT_KEYS = [
//   'ArrowUp',
//   'ArrowDown',
//   'ArrowLeft',
//   'ArrowRight',
// ];

// export const STEPS = new Map<string, Position>([
//   ['ArrowUp', { x: 0, y: -1 }],
//   ['ArrowDown', { x: 0, y: 1 }],
//   ['ArrowLeft', { x: -1, y: 0 }],
//   ['ArrowRight', { x: 1, y: 0 }],
// ]);

// export default class Matrix {
//   private rows: number;
//   private cols: number;
//   private target: Position;
//   private _matrix: any[] = [];

//   constructor(rows: number, cols: number, target: Position) {
//     this.rows = rows;
//     this.cols = cols;
//     this.target = target;

//     this.create2dMatrix();
//   }

//   get matrix() {
//     return this._matrix;
//   }

//   create2dMatrix = () => {
//     const matrix = [];

//     for (let i = 0; i < this.cols; i += 1) {
//       matrix[i] = new Array(this.rows).fill(false);
//     }
//     matrix[this.target.x][this.target.y] = true;
//     this._matrix = matrix;

//     // this.moveTargetTo('UP');
//   };

//   moveToPosition = ({ x, y }: Position) => {
//     const newX = this.target.x + x;
//     const newY = this.target.y + y;

//     if (
//       newX >= 0 &&
//       newX <= this.matrix[0].length - 1 &&
//       newY >= 0 &&
//       newY <= this.matrix.length - 1
//     ) {
//       this.matrix[newX][newY] = true;
//       this.matrix[this.target.x][this.target.y] = false;
//       this.target = {
//         x: newX,
//         y: newY,
//       };

//       console.log('MOVE TARGET');
//     } else {
//       console.log('WALL HIT');
//     }
//   };

//   moveTarget = (movement: string) => {
//     const position = STEPS.get(movement);

//     if (position) {
//       this.moveToPosition(position);
//     }
//   };
// }
/* eslint-enable */
// export const create2dMatrix = (
//   rows: number,
//   cols: number,
//   target?: { x: number; y: number }
// ): any[] => {
//   const matrix = [];

//   for (let i = 0; i < cols; i += 1) {
//     matrix[i] = new Array(rows).fill('O');
//   }

//   if (target) {
//     matrix[target.x][target.y] = 'X';
//   }
//   return matrix;
// };
