const arr = [23, 5, 5, 54, 10, 12, 3, 18, 21, 4]

function insertionSort(arr) {

    for(let i = 1;  i < arr.length; i++) {
        const element = arr[i]
        let j;
        for (j = i - 1; j >= 0 && arr[j] > element; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = element
        
    }
    
}

insertionSort(arr)
console.log(arr)