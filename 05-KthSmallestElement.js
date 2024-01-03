//Question
//Find the Kth smallest element in the given array

//Solution

const kthsmallest = (arr, k) => {
    let maxheap = []

    for(let i=0;i<arr.length;i++){
        if(maxheap.length < k){
            maxheap.push(arr[i])
            heapdriver(maxheap)
        }
        else{
            if(maxheap[0] > arr[i]){
                maxheap[0] = arr[i]
                heapdriver(maxheap)
            }
        }
    }
    return maxheap[0]
}

const heapdriver = (heap) => {
    let n = heap.length

    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(heap,n,i)
    }
}

const heapify = (heap, size, i) => {
    let largest = i
    let left = 2* largest + 1
    let right = 2* largest + 2
    if(left < size && heap[left] > heap[largest]){
        largest = left
    }
    if(right < size && heap[right] > heap[largest]){
        largest = right
    }
    if(largest != i){
        let temp = heap[largest]
        heap[largest] = heap[i]
        heap[i] = temp
        heapify(heap,size,largest)
    }
}

//Inputs

let input1 = [1,55,10,11,15,5]
let input2 = 6

console.log(kthsmallest(input1, input2))