//Create a heap

const insert = (heap, val) => {
    heap.push(val)
    let size = heap.length

    for(let i= Math.floor(size/2)-1;i >= 0; i--){
        heapify(heap, size, i)
    }
}

const heapify = (heap, size, i) => {
    let largest = i
    let left = 2*largest + 1
    let right = 2*largest + 2

    if(left < size && heap[largest] < heap[left]){
        largest = left
    }
    if(right < size && heap[largest] < heap[right]){
        largest = right
    }
    if(largest != i){
        let temp = heap[largest]
        heap[largest] = heap[i]
        heap[i] = temp
        heapify(heap,size,largest)
    }
}

const pop = (heap) => {
    let temp = heap[heap.length-1]
    heap[heap.length-1] = heap[0]
    heap[0] = temp
    let res = heap.pop()
    let size = heap.length
    for(let i=Math.floor(size/2)-1 ;i>=0 ;i--){
        heapify(heap,size,i)
    }
    return res
}


let heap = []
insert(heap, 1)
insert(heap, 10)
insert(heap, 11)
insert(heap, 5)
insert(heap, 55)
insert(heap, 15)

console.log(heap)

//Delete from top of the heap

console.log('deleted value',pop(heap))
console.log('deleted value',pop(heap))
console.log('deleted value',pop(heap))
console.log('deleted value',pop(heap))
console.log('deleted value',pop(heap))
console.log('deleted value',pop(heap))