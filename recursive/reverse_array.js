function reverseArray(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
      const tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      reverseArray(arr, start + 1, end - 1);
    }
    return arr;
  }

    console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));