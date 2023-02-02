/**
 * 처음 풀었던 풀이법
 * 18 / 22 testcases passed
 */

var productExceptSelf = function (nums) {
  let cloneNums = [...nums];
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    cloneNums.splice(i, 1);
    answer.push(cloneNums.reduce((a, b) => a * b));
    cloneNums = [...nums];
  }

  return answer;
};

/**
 * 참고한 풀이법
 * DFS
 */
const productExceptSelf = function (nums) {
  let output = [];
  let leftMult = 1;
  let rightMult = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }

  return output;
};
