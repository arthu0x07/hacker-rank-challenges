function permutationEquation(p) {
    const indexMap = {};
    const result = [];

    p.forEach((element, index) => {
        indexMap[element] = index + 1;
    });

    for (let x = 1; x <= p.length; x++) {
        const index = indexMap[x];
        const y = indexMap[index];
        result.push(y);
    }

    return result;
}