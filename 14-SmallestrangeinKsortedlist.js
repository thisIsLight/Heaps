//Question
//You are given K sorted lists and you want to find the smallest range such that at least
//one element from each list exists in the range


//Solution

class LL{
    constructor(data){
        this.data=data
        this.left=null
    }
}

const smallestrange = (arr) => {
    let minheap = new Array(arr.length)
    let max = 0
    let min = Infinity
    for(let i=0;i<arr.length;i++){
        minheap[i] = arr[i]
        if(max < arr[i].data){
            max = arr[i].data
        }
        if(min > arr[i].data){
            min = arr[i].data
        }
    }

    minheapdriver(minheap)
    let range = [min,max]
    while(true){
        min = minheap[0]
        if(max - min.data  < range[1]-range[0]){
            range[0] = min.data
            range[1] = max
        }
        let temp = minheap[0]
        minheap[0] = minheap[minheap.length-1]
        minheap[minheap.length-1] = temp
        minheap.pop()
        if(min.left){
            if(max < min.left.data){
                max = min.left.data
            }
            minheap.push(min.left)
        }
        else{
            break
        }
        minheapdriver(minheap)
    }

    console.log(range)

}

const minheapdriver = (arr) => {
    let size = arr.length

    for(let i= Math.floor(size/2)-1;i>=0;i--){
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
    if(right < size && arr[right].data < arr[smallest].data){
        smallest = right
    }
    if(smallest != i){
        let temp = arr[i]
        arr[i] = arr[smallest]
        arr[smallest] = temp
        heapify(arr,size,smallest)
    }
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

smallestrange(input)