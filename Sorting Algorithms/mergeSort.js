const merge = (leftArr, rightArr) => {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(
  "MERGE",
  mergeSort([83, 540, 46, 35, 56, 24, 457, 32, 5, 7, 3, 73])
);

//MERGE [3,5,7,24,32,35,46,56,73,83,457,540]
