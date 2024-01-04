function beautifulTriplets(d = 0, arr = []) {
  const valueToMatch = d;
  const sequence = arr;
  let countBeautifulTriplets = 0;

  for (let i = 0; i < sequence.length; i++) {
    for (let j = 1 + i; j < sequence.length; j++) {
      if (sequence[j] - sequence[i] !== valueToMatch) {
        continue;
      }

      for (let k = 1 + j; k < sequence.length; k++) {
        if (sequence[k] - sequence[j] !== valueToMatch) {
          continue;
        }

        const arrI = sequence[i];
        const arrJ = sequence[j];
        const arrK = sequence[k];

        if ([arrI, arrJ, arrK].includes(undefined)) {
          break;
        }

        const firstCalc = arrJ - arrI;
        const secondCalc = arrK - arrJ;

        if (firstCalc === secondCalc && secondCalc === valueToMatch) {
          countBeautifulTriplets++;
        }
      }
    }
  }

  return countBeautifulTriplets;
}
