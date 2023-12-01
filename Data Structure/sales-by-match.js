function sockMerchant(n, ar = []) {
  const socks = ar;
  const countSocksObject = {};
  let countPairs = 0;

  for (let i = 0; i < socks.length; i++) {
    if (countSocksObject[socks[i]] === undefined) {
      countSocksObject[socks[i]] = { quantity: 1 };
    } else {
      countSocksObject[socks[i]].quantity++;
    }

    if (countSocksObject[socks[i]].quantity === 2) {
      countPairs++;
      countSocksObject[socks[i]].quantity = 0;
    }
  }

  return countPairs;
}
