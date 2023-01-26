/**
 * 처음 풀었던 풀이법
 * 202 / 211 testcases passed (all passed fail)
 */

var maxProfit = function (prices) {
  let p1 = 0;
  let sum = 0;
  let temp = 0;

  while (p1 < prices.length) {
    temp = 0;
    for (let p2 = p1 + 1; p2 < prices.length; p2++) {
      if (prices[p2] - prices[p1] > 0)
        temp = Math.max(temp, prices[p2] - prices[p1]);
    }
    sum = Math.max(sum, temp);
    p1++;
  }

  return sum;
};

/**
 * 참고한 풀이법
 */
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

/**
 * 수정한 풀이법
 * 방법은 유사했으나 예외 처리를 해주지 않았던 것에서 차이가 있었음!
 * if ~ else 구문으로 수정해서 테스트 통과
 */
var maxProfit = function (prices) {
  let p1 = 0;
  let sum = 0;
  let temp = 0;

  while (p1 < prices.length) {
    temp = 0;
    for (let p2 = p1 + 1; p2 < prices.length; p2++) {
      if (prices[p2] > prices[p1]) {
        temp = Math.max(temp, prices[p2] - prices[p1]);
      } else {
        p1 = p2;
      }
    }
    sum = Math.max(sum, temp);
    p1++;
  }

  return sum;
};
