function saveThePrisoner(n, m, s) {
    const numberOfPrisoners = n;
    const numberOfCandies = m;
    const indexOfChair = s;


    return (numberOfCandies + indexOfChair - 2) % numberOfPrisoners + 1;
}
