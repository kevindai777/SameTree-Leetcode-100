//Objective is to see whether two binary trees are the same.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)

let tree2 = new Tree()
tree2.createRoot(3)
tree2.addLeftNode(tree.root, 9)
tree2.addRightNode(tree.root, 20)
tree2.addRightNode(tree.root.right, 7)
tree2.addLeftNode(tree.root.right, 15)


//O(n) solution where n is the number of nodes in the binary tree
//A recursive solution that doesn't use extra space

function isSameTree(root, root2) {
  if (!root && !root2) {
    return true
  }
  
  if (!root || !root2.root) {
    return false
  }
  
  if (root.val != root2.val) {
    return false
  }
  
  return isSameTree(root.left, root2.left) && isSameTree(root.right, root2.right)
}
return isSameTree(tree.root, tree2.root)


//O(n) solution that does a preorder traversal over both trees and
//compares the arrays.

let arr1 = []
let arr2 = []
    
function dfs(node, arr) {
    if (!node) {
        arr.push(null)
        return
    }
        
    arr.push(node.val)
    dfs(node.left, arr)
    dfs(node.right, arr)
}
dfs(tree.root, arr1)
dfs(tree2.root, arr2)
    
if (arr1.length !== arr2.length) {
    return false
}
    
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        return false
    }
}
    
return true