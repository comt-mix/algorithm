/**
 * 처음 풀었던 풀이법
 * testcases failed
 */
const largestNumber = (nums) => {
  let str = [...nums];
  let answer = "";
  const len = str.length;

  str.sort((a, b) => {
    return String(b)[0] - String(a)[0];
  });

  for (let i = 0; i < len; i++) {
    if (String(str[i])[0] === String(str[i + 1])[0]) {
      if (str[i] % 10 < str[i + 1] % 10) {
        let temp = str[i];
        str[i] = str[i + 1];
        str[i + 1] = temp;
      }
    }
  }

  for (const x of str) {
    answer += x;
  }

  return answer;
};

/**
 * 참고한 풀이법
 */
const largestNumber = (nums) => {
  if (!nums || nums.length === 0) {
    return "0";
  }

  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
};
