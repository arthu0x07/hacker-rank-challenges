function alternatingCharacters(s) {
  const splittedString = [...String(s)];
  let countRemoveItens = 0;

  let lastCharacterCompared = null;
  for (let i = 0; i < splittedString.length; i++) {
    if (i === 0) {
      continue;
    }

    const previousCharacter = splittedString[i - 1];
    const actualCharacter = splittedString[i];
    const characterToCompare = previousCharacter || lastCharacterCompared;

    if (characterToCompare === actualCharacter) {
      splittedString[i] = null;
      lastCharacterCompared = characterToCompare;
      countRemoveItens++;
    }
  }

  return countRemoveItens;
}
