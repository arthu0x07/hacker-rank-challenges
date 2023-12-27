function marsExploration(s = "") {
  const splittedString = [...String(s)];
  let lettersChangedDuringTransmission = 0;

  for (let i = 0; i < splittedString.length; i = i + 3) {
    const firstLetter = splittedString[i].toLocaleLowerCase();
    const secondLetter = splittedString[i + 1].toLocaleLowerCase();
    const thirtyLetter = splittedString[i + 2].toLocaleLowerCase();

    if (firstLetter !== "s") {
      lettersChangedDuringTransmission++;
    }

    if (secondLetter !== "o") {
      lettersChangedDuringTransmission++;
    }

    if (thirtyLetter !== "s") {
      lettersChangedDuringTransmission++;
    }
  }

  return lettersChangedDuringTransmission;
}
