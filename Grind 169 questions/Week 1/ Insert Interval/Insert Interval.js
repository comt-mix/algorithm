/**
 * 처음 풀었던 풀이법
 * testcases failed
 */

var insert = function (intervals, newInterval) {
  const array = intervals.reduce((a, b) => {
    return [...a, ...b];
  });

  let start = 0;
  let end = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] > newInterval[0]) {
      start = Math.min(start, i);
    }
    if (array[i] <= newInterval[1]) {
      end = Math.max(end, i);
    }
  }

  array.splice(start + 1, end - start, newInterval[1]);

  const len = parseInt(array.length / 2);
  const result = Array(len)
    .fill(array)
    .map((v) => v);

  return result;
};

/**
 * 참고한 풀이법
 * O(n)
 */

var insert = function (intervals, newInterval) {
  let [start, end] = newInterval;

  const [prefix, suffix] = [[], []];

  for (const i of intervals) {
    if (i[1] < start) {
      prefix.push(i);
    } else if (i[0] > end) {
      suffix.push(i);
    } else {
      start = Math.min(start, i[0]);
      end = Math.max(end, i[1]);
    }
  }
  return [...prefix, [start, end], ...suffix];
};
