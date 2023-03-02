/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

const majorityElement = (nums) => {
  const map = new Map();

  for (const x of nums) {
    if (!map.has(x)) map.set(x, 1);
    else map.set(x, map.get(x) + 1);
  }

  let max = 0;
  let key = 0;

  for (const keys of map.keys()) {
    if (max < map.get(keys)) {
      max = map.get(keys);
      key = keys;
    }
  }

  return key;
};
