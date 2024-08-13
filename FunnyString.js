function funnyString(s) {
    const n = s.length;
    let forwardDiffs = [];
    let reverseDiffs = [];

    for (let i = 0; i < n - 1; i++) {
        forwardDiffs.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
    }

    for (let i = n - 1; i > 0; i--) {
        reverseDiffs.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)));
    }

    for (let i = 0; i < forwardDiffs.length; i++) {
        if (forwardDiffs[i] !== reverseDiffs[i]) {
            return "Not Funny";
        }
    }

    return "Funny";
}
