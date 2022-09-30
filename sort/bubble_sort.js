const arr = [23, 5, 5, 54, 10, 12, 3, 18, 21, 4];

function bubbleSort(arr) {
  let len = arr.length;
  while (len > 0) {
    let swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (!swapped) break;
    len--;
  }
}

bubbleSort(arr);
console.log(arr);
