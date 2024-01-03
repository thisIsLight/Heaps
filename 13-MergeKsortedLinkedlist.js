//Question
//Given a set of sorted linked lists, you need to make a new linked list such that the list is sorted


//Solution


class LL{
    constructor(data){
        this.data=data
        this.left=null
    }
}

const mergekLL = (arr) => {
    let minheap = new Array(arr.length)

    for(let i=0;i<arr.length;i++){
        minheap[i] = arr[i]
    }
    let res = null
    let ans = null
    minheapdriver(minheap)
    while(minheap.length > 0){
        let min = minheap[0]
        if(res == null){
            res = new LL(min.data)
            ans = res
        }
        else{
            res.left = new LL(min.data)
            res = res.left
        }
        swap(minheap,0,minheap.length-1)
        minheap.pop()
        if(min.left){
            minheap.push(min.left)
        }
        minheapdriver(minheap)
    }
    while(ans){
        console.log(ans.data)
        ans = ans.left
    }
}

const minheapdriver = (arr) => {
    let size = arr.length

    for(let i = Math.floor(size/2)-1;i>=0;i--){
        heapify(arr,size,i)
    }
}

const heapify = (arr,size,i) => {
    let smallest = i
    let left = 2*smallest+1
    let right = 2*smallest+2
    if(left<size && arr[left].data < arr[smallest].data){
        smallest = left
    }
    if(right<size && arr[right].data < arr[smallest].data){
        smallest = right
    }
    if(smallest != i){
        let temp = arr[smallest]
        arr[smallest] = arr[i]
        arr[i] = temp
        heapify(arr,size,smallest)
    }
}


const swap = (arr,i,j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//Inputs

let input = []

let ll1 = new LL(1)
ll1.left = new LL(3)
ll1.left.left = new LL(5)
ll1.left.left.left = new LL(7)

let ll2 = new LL(2)
ll2.left = new LL(4)
ll2.left.left = new LL(8)

let ll3 = new LL(10)

let ll4 = new LL(1)
ll4.left = new LL(10)
ll4.left.left = new LL(15)
ll4.left.left.left = new LL(20)
ll4.left.left.left.left = new LL(21)
ll4.left.left.left.left.left = new LL(55)

input[0] = ll1
input[1] = ll2
input[2] = ll3
input[3] = ll4

mergekLL(input)