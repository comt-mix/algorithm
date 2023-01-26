/**
 * 처음 풀었던 풀이법
 * testcases failed
 * 이게 도대체 뭐야...수학이야..??
 */

/**
 * 참고한 풀이법
 * O(N + k log (N))
 */

// we can build the heap in place
var kClosest = function (points, k) {
  let p = Math.floor((points.length - 2) / 2); // last parent
  for (let i = p; i >= 0; i--) {
    heapifyDown(points, i, distance);
  }

  // now we need to remove the smallest (points[0]) k times
  let solution = [];
  for (let i = 0; i < k; i++) {
    solution.push(remove(points, distance));
  }

  return solution;

  // read 0, replace 0 with last position, heapifyDown
  function remove(heap, weightFunction) {
    let val = heap[0];
    heap[0] = heap.pop();
    heapifyDown(heap, 0, weightFunction);
    return val;
  }

  // compare with children, swap with smallest, repeat
  function heapifyDown(heap, idx, weightFunction) {
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let smallest = left;

    if (left >= heap.length) return;

    if (
      right < heap.length &&
      weightFunction(heap[left]) > weightFunction(heap[right])
    ) {
      smallest = right;
    }

    if (weightFunction(heap[idx]) > weightFunction(heap[smallest])) {
      [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
      heapifyDown(heap, smallest, weightFunction);
    }
  }

  function distance(point) {
    return point[0] * point[0] + point[1] * point[1];
  }
};
