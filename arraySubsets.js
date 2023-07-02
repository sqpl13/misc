// get all subsets of an array

const array = [1, 2, 3, 4, 5];
const n = array.length;

function subsets(array, n) {
  if (n === 0) {
    return [[]];
  }

  const prev = subsets(array, n - 1);
  const last = array[n - 1];

  return [...prev, ...prev.map((el) => [...el, last])];
}

console.log(subsets(array, n));
