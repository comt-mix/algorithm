/**
 * 처음 풀었던 풀이법
 * 12 / 23 testcases passed
 */
var hasCycle = function (head) {
  let temp;

  if (head) {
    temp = head.value;
    head.value = head.next;
    head.next = temp;
  }

  return head;
};
/**
 * 참고한 풀이법
 */
const hasCycle = (head) => {
  let fast = head;

  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }

  return false;
};
