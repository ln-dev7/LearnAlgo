class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      this.head = new Node(value, current);
    }
    this.size++;
  }

  addLast(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
  }

  add(value, position) {
    if (position < 0 || position > this.size) {
      // throw new Error("Invalid position");
      console.log("Invalid position");
    }
    if (position === 0) {
      this.addFirst(value);
    } else if (position === this.size) {
      this.addLast(value);
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;
      while (count < position) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = new Node(value, current);
    }
    this.size++;
  }

  removeFirst() {
    let current = this.head;
    if (!current) {
      console.log("List is empty");
      return null;
    } else {
      this.head = current.next;
      this.size--;
      return current.value;
    }
  }

  removeLast() {
    let current = this.head;
    if (!current) {
      console.log("List is empty");
      return null;
    } else if (!current.next) {
      this.head = null;
      this.size--;
      return current.value;
    } else {
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.size--;
      return current.value;
    }
  }

  remove(position) {
    if (position < 0 || position >= this.size - 1) {
      console.log("Invalid position");
      return null;
    } else if (position === 0) {
      return this.removeFirst();
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      const nodeValue = current.next.value;
      current.next = current.next.next;
      this.size--;
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return null;
    } else {
      let current = this.head;
      while (index) {
        current = current.next;
        index--;
      }
      console.log(current.value);
      return current.value;
    }
  }

  contains(value) {
    let current = this.head;
    if (!current) {
      return false;
    } else {
      while (current) {
        if (current.value === value) {
            console.log("true");
          return true;
        } else {
          current = current.next;
        }
      }
    }
    console.log("false");
    return false;
  }

  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.value + " -> "); // equivalent to console.log
      current = current.next;
    }
    console.log("null");
  }
}

const linkedList = new LinkedList();

linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.add(5, 2);
linkedList.add(6, 3);
linkedList.add(7, 4);
linkedList.add(8, 3);
linkedList.add(9, 2);
linkedList.print();
linkedList.remove(2);
linkedList.print();
linkedList.removeFirst();
linkedList.print();
linkedList.removeLast();
linkedList.print();
linkedList.get(2);
linkedList.contains(3);
linkedList.contains(32);