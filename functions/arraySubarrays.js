// get all subarrays of an array

/*
A subarray is a contiguous part of array. An array that is inside another array.
For example, consider the array [1, 2, 3, 4], There are 10 non-empty sub-arrays.
The subarrays are (1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4) and (1,2,3,4).
*/

const array = [1, 2, 3, 4, 5];
const n = array.length;

function getAllSubarrays(array) {
  const subarrays = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      subarrays.push(array.slice(i, j));
    }
  }

  return subarrays;
}

console.log(getAllSubarrays(array));
