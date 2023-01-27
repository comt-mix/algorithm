/**
 * 처음 풀었던 풀이법
 * 45 / 312 testcases passed
 */
var threeSum = function (nums) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let right = j + 1;

      while (right < nums.length) {
        if (nums[i] + nums[j] + nums[right] === 0) {
          temp.push([nums[i], nums[j], nums[right]]);
          right++;
        } else right++;
      }
    }
  }

  for (const x of temp) {
    if (answer.indexOf(x) === -1) answer.push(x);
  }

  return answer;
};

/**
 * 참고한 풀이법
 */
var threeSum = function (nums) {
  const numbers = nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i - 1] === numbers[i]) {
      continue;
    }

    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];

      if (sum === 0) {
        answer.push([numbers[i], numbers[left], numbers[right]]);
        left++;

        while (numbers[left] === numbers[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return answer;
};
