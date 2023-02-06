/**
 * 처음 풀었던 풀이법
 * Testcases passed
 */
const Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (const x of word) {
    if (!node[x]) node[x] = {};
    node = node[x];
  }

  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (let x of word) {
    if (!node[x]) return false;
    node = node[x];
  }

  return node.isEnd === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (let x of prefix) {
    if (!node[x]) return false;
    node = node[x];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
