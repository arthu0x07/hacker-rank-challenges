function getMoneySpent(keyboards = [], drives = [], b) {
    const pricesKeyboards = keyboards;
    const pricesDrives = drives;
    const budget = b;

    let mostExpensive = -1;

    for (let i = 0; i < pricesKeyboards.length; i++) {
        const keyboard = pricesKeyboards[i];


        for (let a = 0; a < pricesDrives.length; a++) {
            const drive = pricesDrives[a];
            const price = keyboard + drive;


            if (price > mostExpensive && price <= budget) {
                mostExpensive = price
            }
        }
    }

    return mostExpensive;
}
