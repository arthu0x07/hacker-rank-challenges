function pickingNumbers(a = []) {
  // Write your code here
  const initialArray = a;
  let countArray = [];

  for (let i = 0; i < initialArray.length; i++) {
    const firstItem = initialArray[i];
    let eachArray = [firstItem];

    for (let b = 0; b < initialArray.length; b++) {
      if (b === i) {
        continue;
      }
      const nextItem = initialArray[b];

      if (nextItem === firstItem) {
        eachArray = [...eachArray, nextItem];
        continue;
      }

      if (nextItem - 1 === firstItem) {
        eachArray = [...eachArray, nextItem];
      }
    }

    countArray = countArray
      ? [...countArray, eachArray.length]
      : [eachArray.length];
  }

  let highNumber = 0;
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] > highNumber) {
      highNumber = countArray[i];
    }
  }

  return highNumber;
}
