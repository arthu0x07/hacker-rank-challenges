function beautifulDays(i, j, k) {
    const initialDay = i;
    const finalDay = j;
    let countBeautifulDays = 0;

    for (let a = initialDay; a <= finalDay; a++) {
        if (isPerfectDay(a)) {
            countBeautifulDays++;
        }
    }

    function isPerfectDay(number = 0) {
        const splitNumber = [...String(number)];
        let reverseNumber = "";

        for (let a = splitNumber.length - 1; a >= 0; a--) {
            reverseNumber = reverseNumber ? String(reverseNumber) + String(splitNumber[a]) : String(splitNumber[a])
        }

        if ((number - reverseNumber) % k === 0) {
            return true
        }

        return false;
    }

    return countBeautifulDays;
}
