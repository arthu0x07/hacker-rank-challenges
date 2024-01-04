function divisibleSumPairs(n = 0, k = 0, ar = []) {
  const integerArray = ar;
  const numberForDivise = k;
  let arrayOfPairs = [];

  for (let a = 0; a < integerArray.length; a++) {
    const firstItemOfPair = integerArray[a];

    for (let j = a + 1; j < integerArray.length; j++) {
      if (j === a) {
        continue;
      }

      let Pair = [firstItemOfPair, integerArray[j]];

      if (checkIsValidPair(Pair)) {
        arrayOfPairs = [...arrayOfPairs, Pair];
      }
    }
  }

  return arrayOfPairs.length;

  function checkIsValidPair(arr = []) {
    const [itemOne, itemTwo] = arr;

    if ((itemOne + itemTwo) % numberForDivise === 0) {
      return true;
    }
  }
}
