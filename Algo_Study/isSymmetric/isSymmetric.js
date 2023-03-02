/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

const isSymmetric = (root) => {
  if (!root) return true;

  const checkSymmetric = (startNode, nextNode) => {
    if (!startNode && !nextNode) return true;
    if (!startNode || !nextNode) return false;
    if (startNode.val !== nextNode.val) return false;
    if (startNode.val === nextNode.val)
      return (
        checkSymmetric(startNode.left, nextNode.right) &&
        checkSymmetric(startNode.right, nextNode.left)
      );
    else return false;
  };

  return checkSymmetric(root.left, root.right);
};
