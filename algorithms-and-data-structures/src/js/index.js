import {
  StackArray,
  StackObject,
  QueueArray,
  QueueObject
} from "./collections";

import * as algorithms from "./algorithms";

import "../scss/styles";

import * as $ from "jquery";

const num = 10 ** 7;

const testStackArray = () => {
  console.log("============== stack array ==============");
  const stack = new StackArray();

  let start = performance.now();
  for (let i = 0; i < num; i++) {
    stack.push(i);
  }
  console.log(
    `[speed test] ${num} pushes. Elapsed: ${performance.now() - start} ms`
  );

  start = performance.now();
  for (let i = 0; i < num; i++) {
    stack.pop();
  }
  console.log(
    `[speed test] ${num} pops. Elapsed: ${performance.now() - start} ms`
  );
};

const testStackObject = () => {
  console.log("============== stack object ==============");
  const stack = new StackObject();

  let start = performance.now();
  for (let i = 0; i < num; i++) {
    stack.push(i);
  }
  console.log(
    `[speed test] ${num} pushes. Elapsed: ${performance.now() - start} ms`
  );

  start = performance.now();
  for (let i = 0; i < num; i++) {
    stack.pop();
  }
  console.log(
    `[speed test] ${num} pops. Elapsed: ${performance.now() - start} ms`
  );
};

const testQueueArray = () => {
  console.log("============== queue array ==============");
  const queue = new QueueArray();

  let start = performance.now();
  for (let i = 0; i < num; i++) {
    queue.enqueue(i);
  }
  console.log(
    `[speed test] ${num} pushes. Elapsed: ${performance.now() - start} ms`
  );

  start = performance.now();
  for (let i = 0; i < num; i++) {
    queue.dequeue();
  }
  console.log(
    `[speed test] ${num} pops. Elapsed: ${performance.now() - start} ms`
  );
};

const testQueueObject = () => {
  console.log("============== queue object ==============");
  const queue = new QueueObject();

  let start = performance.now();
  for (let i = 0; i < num; i++) {
    queue.enqueue(i);
  }
  console.log(
    `[speed test] ${num} pushes. Elapsed: ${performance.now() - start} ms`
  );

  start = performance.now();
  for (let i = 0; i < num; i++) {
    queue.dequeue();
  }
  console.log(
    `[speed test] ${num} pops. Elapsed: ${performance.now() - start} ms`
  );
};

testStackArray();
testStackObject();
// testQueueArray() Achtung!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
testQueueObject();

console.log("--------------- Array Sort ---------------");
const array = [1, 87, 54, 78, 9, 5, 3, 58];
console.log("Original array", array);

console.log("============== Bubble Sort ==============");
console.log(algorithms.bubbleSort(array));

console.log("============== Quick Sort ==============");
console.log(algorithms.quickSort(array));

console.log("============== Insertion Sort ==============");
console.log(algorithms.insertionSort(array));

$("span").html("Test jQuery import");


// test async/await bable config
async function start() {
  return await Promise.resolve('async await')
}

start().then((e)=> console.log(e))
