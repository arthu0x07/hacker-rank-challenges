function findDigits(n = []) {
  const number = n;
  const splitNumber = [...String(number)];
  let count = 0;

  for (let a = 0; a < splitNumber.length; a++) {
    const numberToDivide = splitNumber[a];

    if (n % numberToDivide === 0) {
      count++;
    }
  }

  return count;
}
