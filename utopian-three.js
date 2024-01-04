function utopianTree(n) {
  const numberOfCicles = n;
  let finalHeight = 1;

  for (let i = 0; i <= numberOfCicles; i++) {
    // ignore the first period
    if (i == 0) {
      continue;
    }

    if (i % 2 === 0) {
      finalHeight = 1 + finalHeight;
      continue;
    }

    finalHeight = finalHeight * 2;
  }

  return finalHeight;
}
