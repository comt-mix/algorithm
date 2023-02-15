/**
 * 처음 풀었던 풀이법
 * testcases passed
 */

const reverseList = (head) => {
  let prev = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
