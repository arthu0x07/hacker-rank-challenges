function miniMaxSum(arr = []) {
    let lowestNumber;
    let higherNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        let tempArray = [...arr];
        let partialArraySum;

        tempArray.splice(i, 1);
        partialArraySum = tempArray.reduce((partialSum, a) => partialSum + a, 0);

        if (partialArraySum > higherNumber) {
            higherNumber = partialArraySum;
        }

        if (i === 0 && lowestNumber === undefined) {
            lowestNumber = partialArraySum;
            continue;
        }

        if (partialArraySum < lowestNumber) {
            lowestNumber = partialArraySum;
        }

    }

    console.log(lowestNumber, higherNumber)
}
