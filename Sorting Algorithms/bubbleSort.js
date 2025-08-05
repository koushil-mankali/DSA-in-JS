const arr = [9, 3, 8, 6, -10, -58, -24];
const arr2 = [82, 2, 5, 7, -1, -33, -6, 7, 3, -99];

const bubbleSort = (data) => {
  let isSwapped = false;

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] > data[i + 1]) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
      isSwapped = true;
    }
  }

  if (isSwapped) {
    bubbleSort(data);
  }
};

bubbleSort(arr);
bubbleSort(arr2);

console.log("first", arr);
console.log("second", arr2);
