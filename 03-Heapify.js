//Write the algorithm for heapify

const heapify = (heap,size,i) => {
    let largest = i
    let left = 2*largest +1
    let right = 2*largest +2
    if(left < size && heap[largest] < heap[left]){
        largest = left
    }
    if(right < size && heap[largest] < heap[right]){
        largest = right
    }
    if(largest != i){
        let temp = heap[largest]
        heap[largest]= heap[i]
        heap[i] = temp
        heapify(heap,size,largest)
    }
}


const heapdriver = (heap) => {
    let size = heap.length
    for(let i = Math.floor(size/2)-1;i>=0;i--){
        heapify(heap,size,i)
    }
}


let arr = [5,1,11,10,55,15]

heapdriver(arr)

console.log(arr)