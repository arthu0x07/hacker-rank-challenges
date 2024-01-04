function pangrams(s) {
  let englishAlphabet = [...String("abcdefghijklmnopqrstuvwxyz")];
  const splittedString = [...String(s)];

  for (let a = 0; a < splittedString.length; a++) {
    const actualLetter = splittedString[a].toLowerCase();

    if (actualLetter === " ") {
      continue;
    }

    if (englishAlphabet.includes(actualLetter)) {
      const letterToRemoveIndex = englishAlphabet.indexOf(actualLetter);

      englishAlphabet[letterToRemoveIndex] = null;
      englishAlphabet.splice(letterToRemoveIndex, 1);
    }
  }

  // remove null elements in array
  let newOrderedArray = [];
  for (let i = 0; i < englishAlphabet.length; i++) {
    if (englishAlphabet[i] !== null) {
      newOrderedArray[newOrderedArray.length] = englishAlphabet[i];
    }
  }
  englishAlphabet = newOrderedArray;

  if (englishAlphabet.length === 0) {
    return "pangram";
  }

  return "not pangram";
}
