function cavityMap(grid) {
    for (let a = 0; a < grid.length; a++) {
        const actualNumberString = grid[a];
        const splittedActualNumberString = [...String(actualNumberString)];

        grid[a] = splittedActualNumberString;
    }

    for (let lines = 0; lines < grid.length; lines++) {
        if (lines === 0 || lines === grid.length - 1) {
            grid[lines] = String(grid[lines]).replaceAll(",", "");
            continue;
        }

        for (let columns = 0; columns < grid[lines].length; columns++) {
            if (columns === 0 || columns === grid.length - 1) {
                continue;
            }

            const actualNumber = grid[lines][columns];
            const postNumber = grid[lines][columns + 1];
            const previousNumber = grid[lines][columns - 1];
            const upperNumber = grid[lines - 1][columns];
            const downNumber = grid[lines + 1][columns];

            const arrayOfNumbersToCompare = [postNumber, previousNumber, upperNumber, downNumber];

            if (arrayOfNumbersToCompare.every((number) => number < actualNumber)) {
                grid[lines][columns] = 'X';
            }

        }

        grid[lines] = String(grid[lines]).replaceAll(",", "");
    }

    return grid = [...grid];
}
