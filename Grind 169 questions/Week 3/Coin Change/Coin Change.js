/**
 * 처음 풀었던 풀이법
 * Testcases passed failed / 시간초과
 */
var coinChange = function (coins, amount) {
  if ((amount = 0)) return 0;

  let p1 = coins.length - 1;
  let count = 0;

  for (const x of coins) {
    if (x < amount) return -1;
    if (x === amount) return x;
  }

  while (amount === 0) {
    if (amount - coins[p1] !== 0 && amount - coins[p1] > 0) {
      amount -= coins[p1];
      count++;
    }
    if (amount < coins[p1]) {
      p1--;
    }
  }

  return count;
};

/**
 * 참고한 풀이법
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
