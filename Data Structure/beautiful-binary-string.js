function beautifulBinaryString(b) {
  const splittedBinaryString = [...String(b)];
  let countChanges = 0;

  for (let i = 0; i < splittedBinaryString.length; i++) {
    const [a, b, c] = [
      splittedBinaryString[i - 1],
      splittedBinaryString[i],
      splittedBinaryString[i + 1],
    ];

    if (a == 0 && b == 1 && c == 0) {
      countChanges++;
      i += 2;
    }
  }

  return countChanges;
}
