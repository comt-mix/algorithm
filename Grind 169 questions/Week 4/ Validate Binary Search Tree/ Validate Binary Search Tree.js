/**
 * 처음 풀었던 풀이법
 * testcases failed
 */

const isValidBST = (root) => {
  while (root.left !== null || root.right !== null) {
    if (root.left > root.val || root.right < root.val) return false;

    if (root.left < root.val) {
      root.val = root.left;
    }
    if (root.right > root.val) {
      root.val = root.right;
    }
  }

  return true;
};

/**
 * 참고한 풀이법
 */
const isValidBST = (root, min = null, max = null) => {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
