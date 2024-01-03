//Create a heap and insert into it
const insert = (heap, val) => {
    heap.push(val)

    let size = heap.length

    for(let i= Math.floor(size/2)-1; i>=0;i--){
        heapify(heap,size,i)
    }
}

//Heapify the heap after adding the value
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


//Data setup

let heap = []

insert(heap, 1)
insert(heap, 10)
insert(heap, 11)
insert(heap, 5)
insert(heap, 55)
insert(heap, 15)

console.log(heap)

