/**
 * 처음 풀었던 풀이법
 * 37 / 95 testcases passed
 */
var longestPalindrome = function (s) {
  let map = new Map();
  let count = 0;
  let temp = 0;

  for (const x of s) {
    if (!map.has(x)) map.set(x, 1);
    else map.set(x, map.get(x) + 1);
  }

  for (const [keys, values] of map) {
    if (values % 2 === 0) count += values;
    if (values % 2 === 1) temp++;
    if (map.size === 1) return values;
  }

  return temp === 0 ? count : count + 1;
};

/**
 * 참고한 풀이법
 * O(n)
 */
var longestPalindrome = function (s) {
  let map = new Map();
  let odd = 0;

  for (const x of s) {
    if (!map.has(x)) map.set(x, 1);
    else map.set(x, map.get(x) + 1);
  }

  for (let value of map.values()) {
    if (value % 2 === 1) odd += 1;
  }

  return odd > 0 ? s.length - odd + 1 : s.length;
};
