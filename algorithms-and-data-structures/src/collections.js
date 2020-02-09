export class StackArray {
  constructor() {
    this.collection = [];
  }

  push(data) {
    return this.collection.push(data);
  }

  pop() {
    return this.collection.pop();
  }

  print() {
    console.log(this.collection);
  }

  size() {
    return this.collection.length;
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

export class StackObject {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.storage) {
      this.count--;
      const result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  }

  print() {
    console.log(this.storage);
  }

  size() {
    return Object.keys(this.storage).length;
  }

  peek() {
    this.this.storage[this.count - 1]
  }

  isEmpty() {
    return this.count === 0;
  }
}

export class QueueArray {
  constructor() {
    this.collection = [];
  }

  enqueue(data) {
    this.collection.push(data);
  }

  dequeue() {
    return this.collection.shift();
  }

  print() {
    console.log(this.collection);
  }

  size() {
    return this.collection.length;
  }

  peek() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

export class QueueObject {
  constructor() {
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
  }

  enqueue(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;
  }

  dequeue() {
    let oldestIndex = this.oldestIndex,
      newestIndex = this.newestIndex,
      deletedData;

    if (oldestIndex !== newestIndex) {
      deletedData = this.storage[oldestIndex];
      delete this.storage[oldestIndex];
      this.oldestIndex++;

      return deletedData;
    }
  }

  print() {
    console.log(this.storage);
  }

  size() {
    return this.newestIndex - this.oldestIndex;
  }

  peek() {
    return this.storage[this.oldestIndex];
  }

  isEmpty() {
    return Object.keys(this.storage).length === 0;
  }
}
