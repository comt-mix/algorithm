/**
 * 처음 풀었던 풀이법
 * 15 / 24 testcases passed
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let version;

    if (n === 1) version = 1;

    for (let i = 0; i < n; i++) {
      if (isBadVersion(i) === false) version = i + 1;
    }

    return version;
  };
};

/**
 * 참고한 풀이법
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // binary search
    let start = 1;
    let end = n;

    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);

      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on the right side of mid
      }
    }

    return start;
  };
};
