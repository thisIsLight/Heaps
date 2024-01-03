//Question
//We are given k sorted arrays and we need to merge them so that the final array is also sorted


//Solution

class sortdata{
    constructor(row,col,data){
        this.row = row
        this.col = col
        this.data = data
    }
}

const mergeksortedarray = (arr) => {
    let minheap = new Array(arr.length)

    for(let i=0;i<minheap.length;i++){
        minheap[i] = new sortdata(i,0,arr[i][0])
    }

    minheapdriver(minheap)

    let res = []
    while(minheap.length > 0){
        let min = minheap[0]
        swap(minheap,0,minheap.length-1)
        minheap.pop()
        res.push(min.data)
        if(min.col+1 < arr[min.row].length){
            minheap.push(new sortdata(min.row, min.col+1, arr[min.row][min.col+1]))
        }
        minheapdriver(minheap)
    }

    console.log(res)
}

const minheapdriver = (arr) => {
    let n = arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
}

const heapify = (arr,n,i) => {
    let smallest = i
    let left = 2*smallest+1
    let right = 2*smallest+2
    if(left<n && arr[left].data < arr[smallest].data){
        smallest = left
    }
    if(right<n && arr[right].data < arr[smallest].data){
        smallest = right
    }
    if(smallest != i){
        let temp = arr[smallest]
        arr[smallest] = arr[i]
        arr[i] = temp
        heapify(arr,n,smallest)
    }
}


const swap = (arr,i,j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


//Inputs

let input = new Array(4)
input[0] = [1,3,5,7]
input[1] = [2,4,8]
input[2] = [10]
input[3] = [1,10,15,20,21,55]

mergeksortedarray(input)