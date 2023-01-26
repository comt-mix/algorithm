/**
 * 처음 풀었던 풀이법
 * testcases passed
 */
var canConstruct = function (ransomNote, magazine) {
  let arrayMagazine = [...magazine];

  for (const x of ransomNote) {
    if (arrayMagazine.indexOf(x) === -1) return false;
    else arrayMagazine.splice(arrayMagazine.indexOf(x), 1);
  }

  return true;
};

/**
 * 참고한 풀이법
 * Hash Table
 */
var canConstruct = function (ransomNote, magazine) {
  const map = {};

  for (let letter of magazine) {
    if (!map[letter]) {
      map[letter] = 0;
    }
    map[letter]++;
  }

  for (let letter of ransomNote) {
    if (!map[letter]) {
      return false;
    }
    map[letter]--;
  }

  return true;
};
