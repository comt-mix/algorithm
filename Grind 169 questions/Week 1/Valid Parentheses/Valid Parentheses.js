/**
 * 처음 풀었던 풀이법
 * testcases failed
 */

var isValid = function (s) {
  const array = s.split("");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") array.indexOf();
    if (array[i] === "{") array.indexOf();
    if (array[i] === "[") array.indexOf();
  }
};

/**
 * 참고한 풀이법
 * 다들 어쩜 이렇게 잘 푸실까...부럽다.
 */

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
