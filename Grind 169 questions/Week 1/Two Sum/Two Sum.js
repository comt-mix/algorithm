/**
 * 처음 풀었던 풀이법
 */

var twoSum = function (nums, target) {
  let answer = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer.push(i);
        answer.push(j);
      }
    }
  }

  return answer;
};

/**
 * 참고한 풀이법
 * O(n)
 */

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
};
