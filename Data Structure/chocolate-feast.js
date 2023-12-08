function chocolateFeast(n, c, m) {
  // Write your code here
  const moneyQuantity = n;
  const chocolatePrice = c;
  const chocolatePackagesNeeds = m;

  let chocolateReceives = 0;
  let purchasedChocolate = 0;
  let packagesQuantities = 0;

  purchasedChocolate = Math.floor(moneyQuantity / chocolatePrice);
  packagesQuantities = purchasedChocolate;

  while (packagesQuantities >= chocolatePackagesNeeds) {
    if (packagesQuantities >= chocolatePackagesNeeds) {
      chocolateReceives++;
      packagesQuantities++;
      packagesQuantities = packagesQuantities - chocolatePackagesNeeds;
    }
  }

  return purchasedChocolate + chocolateReceives;
}
