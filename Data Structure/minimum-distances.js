function minimumDistances(a = []) {
  const arrayOfIntegers = a;
  let ocurrences = {};

  for (let a = 0; a < arrayOfIntegers.length; a++) {
    const number = arrayOfIntegers[a];

    if (ocurrences[number]?.index === undefined) {
      ocurrences[number] = { index: [a] };
      continue;
    }

    ocurrences[number].index = [...ocurrences[number].index, a];
  }

  let minDistance = null;
  for (let key in ocurrences) {
    const positions = ocurrences[key];

    if (positions.index.length < 2) {
      continue;
    }

    let distance = Math.abs(positions.index[0] - positions.index[1]);

    if (minDistance === null) {
      minDistance = distance;
    }

    minDistance = distance < minDistance ? distance : minDistance;
  }

  return minDistance !== null ? minDistance : -1;
}
