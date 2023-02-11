/**
 * 처음 풀었던 풀이법
 * testcases failed
 */
const combinationSum = (candidates, target) => {
  let store = [];
  let tempStore = [];

  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] > target) return store;

    tempStore.push(candidates[i]);

    for (let j = 0; j < tempStore.length; j++) {
      let sum = 0;

      sum += tempStore[i];

      if (sum === target) {
        store.push(tempStore);
        tempStore.shift();
      }
    }
  }

  return store;
};

/**
 * 참고한 풀이법
 */
const combinationSum = (candidates, target) => {
  const result = [];

  function permute(arr = [], sum = 0, idx = 0) {
    if (sum > target) return;
    if (sum === target) result.push(arr);

    for (let i = idx; i < candidates.length; i++) {
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
  permute();

  return result;
};
