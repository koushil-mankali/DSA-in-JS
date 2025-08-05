const insertionSort = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    let nti = null;
    if (arr[i] < arr[i - 1]) {
      nti = arr[i];
      arr[i] = arr[i - 1];
      let j = i - 1;
      while (j >= 0 && arr[j] > nti) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = nti;
    }
  }

  return arr;
};

console.log(
  "Insertion",
  insertionSort([83, 540, 46, 35, 56, 24, 457, 32, 5, 7, 3, 73])
);

// [    3,  5,  7, 24,  32,   35, 46, 56, 83, 457,  540, 73]
