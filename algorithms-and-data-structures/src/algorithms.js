export function bubbleSort(originalArray) {
  let swapped = false;
  const array = [...originalArray];

  for (let i = 1; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      return array;
    }
  }
  return array;
}

export function quickSort(originalArray) {
  const array = [...originalArray];

  if (array.length <= 1) {
    return array;
  }

  const leftArray = [];
  const rightArray = [];

  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  while (array.length) {
    const currentElement = array.shift();
    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }
  const leftArraySorted = quickSort(leftArray);
  const rightArraySorted = quickSort(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);
}

export function insertionSort(originalArray) {
  const array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    let currentIndex = i;

    while (
      array[currentIndex - 1] !== undefined &&
      array[currentIndex] < array[currentIndex - 1]
    ) {
      const tmp = array[currentIndex - 1];
      array[currentIndex - 1] = array[currentIndex];
      array[currentIndex] = tmp;
      currentIndex -= 1;
    }
  }

  return array;
}
