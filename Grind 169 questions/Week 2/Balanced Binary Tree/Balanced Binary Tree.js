/**
 * 처음 풀었던 풀이법
 * 133 / 228 testcases passed
 */

var isBalanced = function (root) {
  let queue = [root];
  if (!root) return true;

  while (queue.length) {
    const n = queue.shift();

    if (n.left < n.right) isBalanced(n.left);
    else if (n.left === null) isBalanced(n.right);
    else return false;
  }

  return true;
};

/**
 * 참고한 풀이법
 */
var isBalanced = function (root) {
  let dfs = function (node) {
    if (!node) return 0;

    let left = 1 + dfs(node.left);
    let right = 1 + dfs(node.right);

    if (Math.abs(left - right) > 1) return Infinity;

    return Math.max(left, right);
  };

  return dfs(root) == Infinity ? false : true;
};
