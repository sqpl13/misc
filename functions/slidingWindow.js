// sliding window example - get sum of each window sized k in an array

const array = [1, 2, 3, 4, 5];
const k = 3;

function slidingWindow(array, k) {
  let result = [];
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += array[i];
  }

  result.push(windowSum);

  for (let i = k; i < array.length; i++) {
    windowSum += array[i] - array[i - k];
    result.push(windowSum);
  }

  return result;
}

console.log(slidingWindow(array, k));
