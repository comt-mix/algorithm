/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

var isPalindrome = function (s) {
  const letter = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const revLetter = s
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-z0-9]/g, "");

  if (letter !== revLetter) return false;

  return true;
};

/**
 * 참고한 풀이법
 * 개인적으로 two pointer 풀이방식이 괜찮다고 생각해서 참고했음.
 */
var isPalindrome = function (s) {
  let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }

  return true;
};
