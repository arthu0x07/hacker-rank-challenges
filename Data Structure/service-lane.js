function serviceLane(width, cases = []) {
  let arrayOfWidths = [];

  for (let a = 0; a < cases.length; a++) {
    const [indexA, indexB] = cases[a];
    let lowerLength = 0;

    for (let b = indexA; b <= indexB; b++) {
      const lenght = width[b];

      if (b === indexA) {
        lowerLength = lenght;
        continue;
      }

      if (lenght < lowerLength) {
        lowerLength = lenght;
      }
    }

    arrayOfWidths = arrayOfWidths
      ? [...arrayOfWidths, lowerLength]
      : [lowerLength];
  }

  return arrayOfWidths;
}
