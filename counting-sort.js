function countingSort(arr) {
  let pointsArray = [];

  pointsArray = new Array(100).fill(0);

  for (let i = 0; i <= arr.length - 1; i++) {
    pointsArray[arr[i]] += 1;
  }

  return pointsArray;
}
