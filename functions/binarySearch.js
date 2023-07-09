// binary search example - find the index of a target value in a sorted array

const array = [1, 2, 3, 4, 5];
const target = 4;

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch(array, target));
