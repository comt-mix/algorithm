/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

const searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  if (!matrix.length) return false;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else row++;
  }

  return false;
};
