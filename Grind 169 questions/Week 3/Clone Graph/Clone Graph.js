/**
 * 처음 풀었던 풀이법
 * Testcases passed failed / 시간초과
 */

var cloneGraph = function (node) {
  let graph = node;
  let map = new Map();

  if (node === null) return null;

  while (node.val) {
    if (map.has(node.val)) {
      map.set(node.val, map.get(node.val) + 1);
      node.val.pop();
    } else {
      map.set(node.val, 1);
      node.val.pop();
    }
  }
};

/**
 * 참고한 풀이법
 * DFS
 */
const cloneGraph = (node) => {
  if (node === null) {
    return null;
  }

  const map = new Map();
  const clone = (root) => {
    if (!map.has(root.val)) {
      map.set(root.val, new Node(root.val));
      map.get(root.val).neighbors = root.neighbors.map(clone);
    }

    return map.get(root.val);
  };

  return clone(node);
};
