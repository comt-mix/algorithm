/**
 * 처음 풀었던 풀이법
 * testcases failed
 * 아예 접근을 못했음
 */

/**
 * 참고한 풀이법
 * inorder 배열을 잘 살펴보면 root를 기준으로 왼쪽에 있는 숫자는 실제 왼쪽 노드에만 있고, 오른쪽에 있는 숫자는 오른쪽 노드에만 있게됩니다.
 * preorder 배열을 이용하여 root를 잡고 root가 inorder 배열에서 몇번째 위치에 있는지 인덱스를 구합니다.
 * 그러면 인덱스(root)를 기준으로 왼쪽에 배치될 노드들과 오른쪽에 배치될 노드들이 나뉘게 됩니다.
 * 나눠진 숫자들을 이용해 왼쪽으로만 재귀를 돌리고, 오른쪽으로만 재귀를 돌리는 접근법이 사용되었습니다.
 */
const buildTree = (preorder, inorder) => {
  if (inorder.length === 0) return null;

  const root = new TreeNode(preorder.shift());
  const index = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
};
