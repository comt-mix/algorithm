/**
 * 처음 풀었던 풀이법
 * Testcases passed
 */

const climbStairs = (n) => {
  let array = Array.from({ length: n + 1 }, () => 0);

  array[1] = 1;
  array[2] = 2;

  for (let i = 3; i <= n; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }

  return array[n];
};
