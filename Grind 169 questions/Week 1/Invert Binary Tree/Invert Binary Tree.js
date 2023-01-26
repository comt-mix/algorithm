/**
 * 처음 풀었던 풀이법
 * testcases failed
 * 값 비교로 바꾸눈 것이 아닌 그냥 무조건 순서를 바꾸는 문제였음.
 */
var invertTree = function (root) {
  let node = new TreeNode();
  node = root;

  for (let i = 1; i < root; i++) {
    if (root[i] > node.value) {
      node.left = root[i];
    } else if (root[i] < node.value) {
      node.right = root[i];
    }
    node.value = node.left;
  }

  return node;
};

/**
 * 참고한 풀이법
 */
// Recursion
function invertTree(root) {
  if (root == null) return root;

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
}

// DFS
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();

    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}

// BFS
function invertTree(root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}
