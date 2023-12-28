function circularArrayRotation(a = [], k, queries = []) {
    const arrayOfNumbers = a;
    const rotationsNeed = k;
    const queriesPositions = queries;

    let result = []
    let rotationsDo = 0;

    while (rotationsNeed > rotationsDo) {
        const lastElement = arrayOfNumbers.pop();
        arrayOfNumbers.unshift(lastElement);
        rotationsDo++;
    }

    for (let i = 0; i < queriesPositions.length; i++) {
        const index = queriesPositions[i];
        result = [...result, arrayOfNumbers[index]]
    }

    return result;
}
