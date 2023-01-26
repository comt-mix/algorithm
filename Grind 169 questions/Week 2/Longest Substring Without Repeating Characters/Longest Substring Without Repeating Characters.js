/**
 * 처음 풀었던 풀이법
 * testcases passed failed
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let answer = "";
  let string = [...s];

  for (let i = 0; i < s.length; i++) {
    if (string[i] !== string[i + 1]) {
      answer += string[i];
      string.splice(string.indexOf(string[i]), 1);

      if (s.indexOf(s[i]) !== -1) answer = "";
    } else {
      max = Math.max(answer.length, max);
      answer = "";
    }
  }

  return max;
};

/**
 * 참고한 풀이법
 */
var lengthOfLongestSubstring = function (s) {
  let answer = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (answer.includes(s[i])) {
      answer = answer.slice(answer.indexOf(s[i]) + 1);
    }
    answer += s[i];
    max = Math.max(max, answer.length);
  }

  return max;
};
