// two pointer example - two sum problem

const array = [1, 2, 3, 4, 5];
const target = 9;

function twoPointer(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let sum = array[left] + array[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }

  return -1;
}
