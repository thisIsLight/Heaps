//Question
//Merge two Max heaps and make it a max heap


//Solution

const mergeheaps = (heap1,heap2) => {
    let mergedheap = []

    heap1.map((a) => {
        mergedheap.push(a)
    })
    heap2.map((a) => {
        mergedheap.push(a)
    })

    let size = mergedheap.length

    for(let i= Math.floor(size/2)-1;i>=0;i--){
        heapify(mergedheap,size,i)
    }

    console.log(mergedheap)
}

const heapify = (heap,size,i) => {
    let largest = i
    let left = 2*largest +1
    let right = 2*largest +2
    if(left<size && heap[left] > heap[largest]){
        largest = left
    }
    if(right<size && heap[right] > heap[largest]){
        largest = right
    }
    if(largest != i){
        let temp = heap[largest]
        heap[largest] = heap[i]
        heap[i] = temp
        heapify(heap,size,largest)
    }
}


//Input

let input1 = [55,11,15,1,5,10]
let input2 = [65,11,15,2,6,10]

mergeheaps(input1,input2)