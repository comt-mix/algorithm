/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

//1
var search = function (nums, target) {
  if (nums.indexOf(target) !== -1) return nums.indexOf(target);

  return -1;
};
//2
var search = function (nums, target) {
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
};

/**
 * 참고한 풀이법
 */

var search = function (nums, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid -= 1;
  }

  return -1;
};
