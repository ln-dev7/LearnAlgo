class MyArray {
  constructor() {
    this.value = [];
  }

  addItemAtBeginning(item) {
    const arr = new Array(this.value.length + 1);
    arr[0] = item;
    for (let i = 0; i < this.value.length; i++) {
      arr[i + 1] = this.value[i];
    }
    this.value = arr;
  }
  // Complexity: O(n)

  addItemAtEnd(item) {
    const arr = new Array(this.value.length + 1);
    for (let i = 0; i < this.value.length; i++) {
      arr[i] = this.value[i];
    }
    arr[this.value.length] = item;
    this.value = arr;
  }
  // Complexity: O(n)

  addItemAtPosition(item, position) {
    if (position < 0 || position > this.value.length) {
      // throw new Error("Invalid position");
      console.log("Invalid position");
    } else {
      const arr = new Array(this.value.length + 1);
      for (let i = 0; i < position; i++) {
        arr[i] = this.value[i];
      }
      arr[position] = item;
      for (let i = position; i < this.value.length; i++) {
        arr[i + 1] = this.value[i];
      }
      this.value = arr;
    }
  }
  // Complexity: O(n)

  removeItemAtBeginning() {
    if (this.value.length === 0) {
      // throw new Error("Array is empty");
      console.log("Array is empty");
      return;
    } else {
      const arr = new Array(this.value.length - 1);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = this.value[i + 1];
      }
      this.value = arr;
    }
  }
  // Complexity: O(n)

  removeItemAtEnd() {
    if (this.value.length === 0) {
      // throw new Error("Array is empty");
      console.log("Array is empty");
      return;
    } else {
      const arr = new Array(this.value.length - 1);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = this.value[i];
      }
      this.value = arr;
    }
  }
  // Complexity: O(n)

  removeItemAtPosition(position) {
    if (position < 0 || position > this.value.length) {
      // throw new Error("Invalid position");
      console.log("Invalid position");
    } else {
      const arr = new Array(this.value.length - 1);
      for (let i = 0; i < position; i++) {
        arr[i] = this.value[i];
      }
      for (let i = position; i < arr.length; i++) {
        arr[i] = this.value[i + 1];
      }
      this.value = arr;
    }
  }
  // Complexity: O(n)
}

const myarr = new MyArray();
myarr.addItemAtBeginning(1);
myarr.addItemAtBeginning(4);
myarr.addItemAtBeginning(5);
myarr.addItemAtBeginning(-1);
console.log(myarr.value);
myarr.addItemAtBeginning(2);
console.log(myarr.value);
myarr.addItemAtEnd(3);
console.log(myarr.value);
myarr.addItemAtPosition(4, 2);
console.log(myarr.value);
myarr.removeItemAtBeginning();
console.log(myarr.value);
myarr.removeItemAtEnd();
console.log(myarr.value);
myarr.removeItemAtPosition(3);
console.log(myarr.value);
