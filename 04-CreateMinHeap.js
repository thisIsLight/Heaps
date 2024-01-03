//Question
//Create min heap given an array


//Solution with Heaps

const driver = (heap) => {
    let n = heap.length

    for(let i = Math.floor(n/2)-1; i>=0;i--){
        minheapify(heap,n,i)
    }
}

const minheapify = (heap, size, i) => {
    let smallest = i
    let left = 2*smallest + 1
    let right = 2*smallest + 2

    if(left < size && heap[left] < heap[smallest]){
        smallest = left
    }
    if(right < size && heap[right] < heap[smallest]){
        smallest = right
    }
    if(smallest != i){
        let temp = heap[smallest]
        heap[smallest] = heap[i]
        heap[i] = temp
        minheapify(heap,size,smallest)
    }
}

//Inputs

let input = [55,10,15,11,1,5]

driver(input)

console.log(input)