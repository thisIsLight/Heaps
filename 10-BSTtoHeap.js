//Question
//Convert a BST to Heap


//Solution

class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

const inorder = (root, arr) => {
    if(!root){
        return
    }
    else{
        inorder(root.left,arr)
        arr.push(root.data)
        inorder(root.right,arr)
    }
}

const preorder = (root, arr, i) => {
    if(!root){
        return
    }
    else{
        root.data = arr[i]
        i = i*2+1
        preorder(root.left,arr,i)
        i = i*2+2
        preorder(root.right,arr,i)
    }
}


//Inputs

let input = null
input = new TreeNode(5)
input.left = new TreeNode(3)
input.right = new TreeNode(6)
input.left.left = new TreeNode(1)
input.left.right = new TreeNode(4)

let arr = []
inorder(input,arr)

preorder(input,arr,0)
console.log(input)
