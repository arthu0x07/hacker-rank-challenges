function jumpingOnClouds(c = []) {
    let jumps = 0;
    const arrayOfClouds = [...c]


    for (let i = 0; i < arrayOfClouds.length - 1; i + 1) {

        if (arrayOfClouds[i + 2] == 0) {
            i = i + 2
        } else {
            i++
        }

        jumps++;
    }

    
    return jumps
}