/**
 * 처음 풀었던 풀이법
 * testcases passed failed
 */

/**
 * 참고한 풀이법
 * O(n)
 */
const levelOrder = function (root) {
  let queue = [root];
  let answer = [];

  while (queue[0]) {
    let row = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curr = queue.shift();

      row.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    answer.push(row);
  }

  return answer;
};
