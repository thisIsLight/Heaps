//Question
//You are given an array and you need to find the Kth largest subarray sum


//Solution

const KthlargestSubarraysum = (arr,k) => {
    let heap = []

    for(let i=0;i<arr.length;i++){
        let sum = 0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            if(heap.length < k){
                heap.push(sum)
                minheapdriver(heap)
            }
            else{
                if(heap[0] < sum){
                    heap[0] = sum
                    minheapdriver(heap)
                }
            }
        }
    }
    return heap[0]
}

const minheapdriver = (arr) => {
    let size = arr.length

    for(let i=Math.floor(size/2)-1;i>=0;i--){
        heapify(arr,size,i)
    }
}

const heapify = (heap,size,i) => {
    let smallest = i
    let left = 2*smallest+1
    let right = 2*smallest+2

    if(left<size && heap[left] < heap[smallest]){
        smallest = left
    }
    if(right<size && heap[right] < heap[smallest]){
        smallest = right
    }
    if(smallest != i){
        let temp  = heap[smallest]
        heap[smallest] = heap[i]
        heap[i] = temp
        heapify(heap,size,smallest)
    }
}


//Input

let input1 = [1,2,3]
let input2 = 2

console.log(KthlargestSubarraysum(input1,input2))