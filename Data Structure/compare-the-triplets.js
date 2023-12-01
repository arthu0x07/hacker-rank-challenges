function compareTriplets(a, b) {
  let aliceResultIndex = 0;
  let bobResultIndex = 1;
  let resultArray = [0, 0];

  for (var i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      resultArray[aliceResultIndex] += 1;
    } else if (a[i] < b[i]) {
      resultArray[bobResultIndex] += 1;
    }
  }

  return resultArray;
}
