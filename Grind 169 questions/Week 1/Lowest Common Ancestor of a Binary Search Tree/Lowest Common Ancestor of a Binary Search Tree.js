/**
 * 처음 풀었던 풀이법
 * testcases failed
 * 개인적으로 트리문제 굉장히 못 풀음.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  root;
};

/**
 * 참고한 풀이법
 */

var lowestCommonAncestor = function (root, p, q) {
  // If the value of root node is greater than the value of p node and less than the value of q node...
  if (root.val > p.val && root.val < q.val) {
    return root;
  }
  // If the value of p node and the q node is less than the value of root node...
  else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // If the value of p node and the q node is greater than the value of root node...
  else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};
