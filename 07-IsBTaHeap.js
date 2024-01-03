//Question
//Given a binary tree we need to find out if the binary tree is a maxheap or not


//Solution

class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}


const validatetreeasheap = (root) => {
    if(!root.left && !root.right){
        return true
    }
    if(!root.right){
        return root.data > root.left.data
    }
    else{
        let left = root.left.data
        let right = root.right.data
        let leftdepth = validatetreeasheap(root.left)
        let rightdepth = validatetreeasheap(root.right)
        return (left < root.data && right < root.data && leftdepth && rightdepth)
    }
}

const validatecompleteBT = (root) => {
    if(!root.left && !root.right){
        return true
    }
    if(!root.right && root.left){
        return true
    }
    if(!root.left && root.right){
        return false
    }
    else{
        let leftdepth = validatecompleteBT(root.left)
        let rightdepth = validatecompleteBT(root.right)
        return leftdepth && rightdepth
    }
}


//Inputs

let root = null
root = new TreeNode(55)
root.left = new TreeNode(11)
root.right = new TreeNode(15)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(10)

console.log(validatecompleteBT(root) && validatetreeasheap(root))