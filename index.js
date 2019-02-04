function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(node, newNode) {
  if (node.data === newNode.data) return true;

  if (newNode.data < node.data) {
    if (node.left) {
      return findOrAdd(node.left, newNode);
    } else {
      node.left = newNode;
    }
  } else {
    if (node.right) {
      return findOrAdd(node.right, newNode);
    } else {
      node.right = newNode;
    }
  }
}

function max(node) {
  return node.right ? max(node.right) : node;
}

function min(node) {
  return node.left ? min(node.left) : node;
}
