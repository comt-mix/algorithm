/**
 * 처음 풀었던 풀이법
 * testcases failed
 */
const permute = (nums) => {
  let answer = [];

  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = nums.length - 1; k > 0; k--) {
        if (nums[i] !== nums[j] && nums[j] !== nums[k])
          answer.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  return answer;
};

/**
 * 참고한 풀이법
 */
const permute = (nums) => {
  // Backtracking
  const used = new Set(); // Keep track of what we have used
  const path = []; // Current potiential answer array
  const res = []; // Result array to be returned

  const dfs = () => {
    // If path is same length as nums, we know we have an answer. Push it to res array
    if (path.length === nums.length) {
      res.push([...path]); // We use spread operator to clone since arrays are pass by reference
    }

    // Every DFS we loop all numbers
    for (let i = 0; i < nums.length; i++) {
      // We can skip these numbers if they have been used
      if (used.has(nums[i])) continue;

      // Add to our potienial answer array and make it used by adding to used set
      path.push(nums[i]);
      used.add(nums[i]);

      // After adding, we call DFS again. DFS will continue till we hit the base case above
      // Think of this as just continuing down a path till we have an answer
      dfs();

      // Once we pop out of DFS, we need to remove from path array and remove from used Set
      // This will let it be used later in further paths
      path.pop();
      used.delete(nums[i]);
    }
  };

  // Start DFS
  // All variables are global, no need to pass in anything
  dfs();

  return res;
};
