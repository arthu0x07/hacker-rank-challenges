function cutTheSticks(arr = []) {
  // Write your code here
  let cuttedArray = arr;
  let countItensByIteration = [arr.length];

  while (cuttedArray.length > 0) {
    let smallStick;

    // find the small stick
    for (let i = 0; i < cuttedArray.length; i++) {
      const stick = cuttedArray[i];

      // skips the first iteration when smallstick is not defined
      if (smallStick === undefined) {
        smallStick = stick;
        continue;
      }

      if (stick < smallStick) {
        smallStick = stick;
      }
    }

    // remove the smallstick length for each stick in cuttedArray
    for (let i = 0; i < cuttedArray.length; i++) {
      const stick = cuttedArray[i];

      cuttedArray[i] = stick - smallStick;

      // null is the discarted stick
      if (cuttedArray[i] <= 0) {
        cuttedArray[i] = null;
      }
    }

    // reorder the array to remove "null itens"
    let newOrderedArray = [];
    for (let i = 0; i < cuttedArray.length; i++) {
      if (cuttedArray[i] !== null) {
        newOrderedArray[newOrderedArray.length] = cuttedArray[i];
      }
    }
    cuttedArray = newOrderedArray;

    // set the number of sticks after each iteration
    if (cuttedArray.length !== 0) {
      countItensByIteration[countItensByIteration.length] = cuttedArray.length;
    }
  }

  return countItensByIteration;
}
