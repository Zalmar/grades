import {
  StackArray,
  StackObject,
  QueueArray,
  QueueObject
} from "./collections";

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
