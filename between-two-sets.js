function getTotalX(a, b) {
    const lcmOfA = getLCMOfArray(a);
    const gcdOfB = getGCDOfArray(b);

    let count = 0;

    for (let i = lcmOfA; i <= gcdOfB; i += lcmOfA) {
        if (gcdOfB % i === 0) {
            count++;
        }
    }

    return count;
    
    function calculateGCD(x, y) {
        return y === 0 ? x : calculateGCD(y, x % y);
    }

    function calculateLCM(x, y) {
        return (x * y) / calculateGCD(x, y);
    }

    function getLCMOfArray(array) {
        return array.reduce((acc, curr) => calculateLCM(acc, curr));
    }

    function getGCDOfArray(array) {
        return array.reduce((acc, curr) => calculateGCD(acc, curr));
    }
}
