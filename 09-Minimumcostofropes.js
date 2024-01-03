//Question
//You are given an array of integers that contain the length of ropes.
//Join a rope cost us the sum of the length of the ropes.
//Find the lowest cost of ropes to join and make a single rope


//Solution

const mincostofrope = (arr) => {
    let res = 0
    heapdriver(arr)
    while(arr.length > 1){
        let first = arr[0]
        swap(arr,0,arr.length-1)
        arr.pop()
        heapdriver(arr)
        let second = arr[0]
        swap(arr,0,arr.length-1)
        arr.pop()
        res += (first+second)
        arr.push(first+second)
        heapdriver(arr)
    }
    return res
}

const heapdriver = (arr) => {
    let size = arr.length

    for(let i=Math.floor(size/2)-1;i>=0;i--){
        minheapify(arr,size,i)
    }
}

const minheapify = (heap,size,i) => {
    let smallest = i
    let left = 2*smallest + 1
    let right = 2*smallest + 2

    if(left<size & heap[left] < heap[smallest]){
        smallest = left
    }
    if(right<size & heap[right] < heap[smallest]){
        smallest = right
    }
    if(smallest != i){
        let temp = heap[smallest]
        heap[smallest] = heap[i]
        heap[i] = temp
        minheapify(heap,size,smallest)
    }
}

const swap = (arr,i,j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


//Inputs

let input = [4,3,2,6]

console.log(mincostofrope(input))