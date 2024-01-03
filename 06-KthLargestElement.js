//Question
//Find the Kth largest element from a given array


//Solution

const kthlargest = (arr, k) => {
    let minheap = []

    for(let i=0;i<arr.length;i++){
        if(minheap.length < k){
            minheap.push(arr[i])
            heapdriver(minheap)
        }
        else{
            if(minheap[0] < arr[i]){
                minheap[0] = arr[i]
                heapdriver(minheap)
            }
        }
    }
    return minheap[0]
}

const heapdriver = (heap) => {
    let n = heap.length

    for(let i = Math.floor(n/2)-1;i>= 0;i--){
        heapify(heap,n,i)
    }
}

const heapify = (heap,size,i) => {
    let smallest = i
    let left = 2*smallest + 1
    let right = 2*smallest + 2
    if(left<size && heap[left] < heap[smallest]){
        smallest = left
    }
    if(right<size && heap[right] < heap[smallest]){
        smallest = right
    }
    if(smallest != i){
        let temp = heap[smallest]
        heap[smallest] = heap[i]
        heap[i] = temp
        heapify(heap,size,smallest)
    }
}


//Inputs

let input1 = [1,55,11,10,15,5]
let input2 = 3

console.log(kthlargest(input1,input2))