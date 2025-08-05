const arr = [1, 2, 4, 5, 7, 9, 20, 39];

const binarySearchRecursive = (data, target, li, ri) => {
  let leftIndex = li;
  let rightIndex = ri;
  let middleIndex = Math.floor((li + ri) / 2);

  if (leftIndex > rightIndex) {
    return -1;
  }

  if (data[middleIndex] == target) {
    return middleIndex;
  }

  if (target < data[middleIndex]) {
    return binarySearchRecursive(data, target, leftIndex, middleIndex - 1);
  } else {
    return binarySearchRecursive(data, target, middleIndex + 1, rightIndex);
  }
};

console.log(binarySearchRecursive(arr, 4, 0, arr.length - 1));
console.log(binarySearchRecursive(arr, 30, 0, arr.length - 1));
console.log(binarySearchRecursive(arr, 7, 0, arr.length - 1));
