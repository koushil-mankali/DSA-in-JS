// O(n) complexity

const arr = [20, 9, 7, 39, 2, 4, 1, 7, 5, 20, 39];

const linearSearchInbuilt = (data, target) => {
  return data.indexOf(target);
};

const linearSearch = (data, target) => {
  let rtVal = -1;
  data?.forEach((item, idx) => {
    if (item == target) {
      rtVal = idx;
    }
  });

  return rtVal;
};

console.log(linearSearchInbuilt(arr, 4));
console.log(linearSearchInbuilt(arr, 30));
console.log(linearSearchInbuilt(arr, 7));
console.log("================");
console.log(linearSearch(arr, 4));
console.log(linearSearch(arr, 30));
console.log(linearSearch(arr, 7));
