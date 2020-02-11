function findMinAndRemoveSorted(array) {
  let min = 0;
  for (let i of array) {
    if (array[i] < min) {
      min = i;
    }
  }
  return array.splice(min, 1);
}

function merge(array1, array2) {
  let newArray = [];
  array1.forEach(item => {
    newArray.push(item);
  });
  array2.forEach(item => {
    newArray.push(item);
  });
  newArray.sort((a, b) => a - b);
  return Array.from(new Set(newArray));
}

function mergeSort(array) {
  return array.sort((a, b) => a - b);
}
