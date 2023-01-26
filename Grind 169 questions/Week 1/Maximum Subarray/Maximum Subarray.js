/**
 * 처음 풀었던 풀이법
 * testcases failed
 */

var maxSubArray = function (nums) {
  const array = nums.sort((a, b) => a - b);
  const len = nums.length;

  let sum = 0;
  let lt;

  for (let i = 0; i < len; i++) {
    if (array[i] > 0) {
      lt = i;
      break;
    }
  }

  for (let i = lt; i < len; i++) {
    sum += array[i];
  }

  return sum;
};

/**
 * 참고한 풀이법
 * O(N) DP
 * Kadane's Algorithm
 */

var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    // if nums[i] > maxSum then maxSum = nums[i]...
    if (nums[i] > maxSum) maxSum = nums[i];
  }

  return maxSum; // return the contiguous subarray which has the largest sum...
};
