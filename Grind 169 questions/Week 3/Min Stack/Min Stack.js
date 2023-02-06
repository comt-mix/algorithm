/**
 * 처음 풀었던 풀이법
 * Testcases passed
 */

const MinStack = function () {
  this.value = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  return this.value.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.value.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.value[this.value.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = Number.MAX_SAFE_INTEGER;

  for (const x of this.value) {
    min = Math.min(min, x);
  }

  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
