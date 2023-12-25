const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin;
  }

  add(data) {
    this.origin = addNode(this.origin, data);

    function addNode(node, data) {
      if (!node) return new Node(data);
      if (data === node.data) return node;

      data < node.data
        ? (node.left = addNode(node.left, data))
        : (node.right = addNode(node.right, data));

      return node;
    }
  }

  has(data) {
    return searchNode(this.origin, data);

    function searchNode(node, data) {
      if (!node) return false;
      if (data === node.data) return true;

      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
  }

  find(data) {
    return findNodeData(this.origin, data);

    function findNodeData(node, data) {
      if (!node) return null;
      if (data === node.data) return node;

      return data < node.data
        ? findNodeData(node.left, data)
        : findNodeData(node.right, data);
    }
  }

  remove(data) {
    this.origin = removeNode(this.origin, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
      }

      return node;
    }
  }

  min() {
    let node = this.origin;
    while (node.left) {
      node = node.left;
    }
    return node ? node.data : null;
  }

  max() {
    let node = this.origin;
    while (node.right) {
      node = node.right;
    }
    return node ? node.data : null;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree,
};
