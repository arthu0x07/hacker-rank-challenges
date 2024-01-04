function migratoryBirds(arr = []) {
  const sighetdArray = arr;
  let countSighted = {}; // {1: 5, 2, 0};
  let mostOccurrenceType = null;

  for (let i = 0; i < sighetdArray.length; i++) {
    const typeSighted = sighetdArray[i];

    if (countSighted[typeSighted]) {
      countSighted[typeSighted]++;
    } else {
      countSighted[typeSighted] = 1;
    }

    if (mostOccurrenceType === null) {
      mostOccurrenceType = typeSighted;
    }

    if (countSighted[typeSighted] > countSighted[mostOccurrenceType]) {
      mostOccurrenceType = typeSighted;
    }

    // draw verify and replace
    if (
      countSighted[typeSighted] === countSighted[mostOccurrenceType] &&
      typeSighted < mostOccurrenceType
    ) {
      mostOccurrenceType = typeSighted;
    }
  }

  return mostOccurrenceType;
}
