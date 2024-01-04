function howManyGames(p, d, m, s) {
  const initialGamePrice = p;
  const unitsToRemoveFromPriceEachIteration = d;
  const minimumPrice = m;

  let money = s;
  let actualGamePrice = initialGamePrice;
  let gamesbuyed = 0;

  // while we have most money
  while (money >= actualGamePrice) {
    gamesbuyed = gamesbuyed + 1; // increase the buy games count
    money = money - actualGamePrice; // remove the money used

    const roundPriceAfterDiscount =
      actualGamePrice - unitsToRemoveFromPriceEachIteration;

    if (roundPriceAfterDiscount >= minimumPrice) {
      actualGamePrice = actualGamePrice - unitsToRemoveFromPriceEachIteration;
    }

    if (roundPriceAfterDiscount < minimumPrice) {
      actualGamePrice = minimumPrice;
    }
  }

  return gamesbuyed;
}
