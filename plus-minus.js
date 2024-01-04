function plusMinus(arr) {
  var lenght = arr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;
  for (var i = 0; i < lenght; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / lenght).toFixed(6));
  console.log((negative / lenght).toFixed(6));
  console.log((zero / lenght).toFixed(6));
}
