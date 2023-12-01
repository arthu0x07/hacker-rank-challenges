function designerPdfViewer(h, word) {
  const heightLetterArray = h;
  const alphabet = [];
  const wordHeightArray = [];

  // create a alphabet array
  for (let i = 0; i < 26; i++) {
    alphabet[i] = String.fromCharCode("a".charCodeAt(0) + i);
  }

  // find each word height
  for (let i = 0; i < word.length; i++) {
    let letterHeight = 0;

    for (let x = 0; x < alphabet.length; x++) {
      if (word[i] === alphabet[x]) {
        letterHeight = heightLetterArray[x];
      }
    }

    wordHeightArray[wordHeightArray.length] = letterHeight;
  }

  //find most high value in wordHeightArray
  let highestValueInArray = 0;
  for (let i = 0; i < wordHeightArray.length; i++) {
    if (wordHeightArray[i] > highestValueInArray) {
      highestValueInArray = wordHeightArray[i];
    }
  }

  const mult = wordHeightArray.length * highestValueInArray;

  return mult;
}
