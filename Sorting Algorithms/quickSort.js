const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr.at(-1);
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

var sortArray = function () {
  let nums = [5, 2, 3, 1];
  return quickSort(nums);
};
