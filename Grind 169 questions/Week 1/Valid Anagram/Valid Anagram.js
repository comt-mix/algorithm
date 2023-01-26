/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

var isAnagram = function (s, t) {
  let map = new Map();

  if (s.length !== t.length) return false;

  for (const x of s) {
    if (!map.has(x)) map.set(x, 1);
    else map.set(x, map.get(x) + 1);
  }

  for (const x of t) {
    if (!map.has(x) || map.get(x) === 0) return false;
    map.set(x, map.get(x) - 1);
  }

  return true;
};
