function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSubarray, secondSubArray) {
  let sorted = [];
  while (firstSubarray.length != 0 && secondSubArray.length != 0) {
    if (firstSubarray[0] < secondSubArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubarray));
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray));
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  let sorted;

  if (array.length < 2) {
    return array;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
}

mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]);
