function angryProfessor(k, a = []) {
    const arrivalTimes = a;
    const minStudentes = k;
    let studentsArrivedOn = 0;

    for (let i = 0; i < arrivalTimes.length; i++) {

        if (arrivalTimes[i] <= 0) {
            studentsArrivedOn++;
        }
    }

    if (studentsArrivedOn >= minStudentes) {
        return "NO"
    }

    return "YES"
}
