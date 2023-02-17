/**
 * 처음 풀었던 풀이법
 * testcases failed
 */
const maximalSquare = (matrix) => {
  const mx = [-1, 0, 1, 0];
  const my = [0, -1, 0, 1];
  let flag = 1;

  function DFS(i, j) {
    for (let k = 0; k < 4; k++) {
      let nx = j + mx[k];
      let ny = i + my[k];

      if (nx >= 0 && ny >= 0 && Number(matrix[nx][ny]) === 1) {
        flag++;
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (Number(matrix[i][j]) === 1) {
        DFS(i, j);
      }
    }
  }
};

/**
 * 참고한 풀이법
 */
const maximalSquare = (matrix) => {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "0") continue;
      if (i > 0 && j > 0) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
          1;
        max = Math.max(matrix[i][j], max);
      }
    }
  }

  return max ** 2;
};
