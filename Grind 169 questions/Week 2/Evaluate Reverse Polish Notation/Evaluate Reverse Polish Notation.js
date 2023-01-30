/**
 * 처음 풀었던 풀이법
 *  testcases passed failed
 */
var evalRPN = function (tokens) {
  let numstack = [];
  let etcstack = [];
  let len =
    numstack.length > etcstack.length ? etcstack.length : numstack.length;

  for (let x of tokens) {
    if (isNaN(parseInt(x))) etcstack.push(x);
    else numstack.push(parseInt(x));
  }

  let temp = [];

  while (len > 0) {
    temp.push(numstack.shift());
    temp.push(etcstack.shift());
  }
};

/**
 * 참고한 풀이법
 * 개인적으로 이 풀이법 보면서 감탄함. 너무 좋은 풀이법.
 */
var evalRPN = function (tokens) {
  let stack = [];
  let ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };

  for (let s of tokens) {
    if (ops[s]) {
      let top = stack.pop();
      let second = stack.pop();

      stack.push(ops[s](second, top));
    } else {
      stack.push(Number(s));
    }
  }

  return stack.pop();
};
