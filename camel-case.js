function camelcase(s) {
  const splittedString = [...String(s)];
  let count = 1;

  for (let i = 0; i < splittedString.length; i++) {
    const letter = splittedString[i];

    if (letter === letter.toUpperCase()) {
      count++;
    }
  }

  return count;
}
