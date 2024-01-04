function encryption(s = String(s)) {
    const stringInArrayFormat = [...String(s)];
    const stringLengthWithoutSpaces = (stringInArrayFormat.length);

    let numberOfRows, numberOfColumns = null;
    let StringSQRT = Math.sqrt(stringLengthWithoutSpaces);

    if (StringSQRT % 1 > 0) {
        numberOfRows = String(StringSQRT).charAt(0);
        numberOfColumns = Number(String(StringSQRT).charAt(0)) + 1
    } else {
        numberOfRows = StringSQRT;
        numberOfColumns = (String(StringSQRT).charAt(0));
    }

    while (numberOfRows * numberOfColumns < stringLengthWithoutSpaces) {
        numberOfRows++;
    }

    // create a grid
    let stringGrid = [];
    let lettersPlaced = 0;

    for (let a = 0; a < numberOfRows; a++) {
        stringGrid[a] = [];

        for (let b = 0; b < numberOfColumns; b++) {
            if (lettersPlaced < stringLengthWithoutSpaces) {
                stringGrid[a][b] = stringInArrayFormat[lettersPlaced];
                lettersPlaced++;
            }
        }
    }

    console.log(stringGrid);

    // create a finalstring
    let finalString = "";
    for (let a = 0; a <= numberOfRows; a++) {

        for (let b = 0; b < numberOfRows; b++) {
            const letter = stringGrid[b][a];

            if (letter === undefined) {
                continue;
            }

            finalString += letter;
        }

        finalString += " "
    }

    return finalString;
}
