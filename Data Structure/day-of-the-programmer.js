function dayOfProgrammer(year) {
  const monthsOfYear = {
    january: { days: 31 },
    february: { days: 28 },
    march: { days: 31 },
    april: { days: 30 },
    may: { days: 31 },
    june: { days: 30 },
    july: { days: 31 },
    august: { days: 31 },
    september: { days: 30 },
    october: { days: 31 },
    november: { days: 30 },
    december: { days: 31 },
  };

  if (year == 1918) {
    return formatDate(9, 26);
  }

  if (year <= 1917 && year >= 1700) {
    // makes the months of year to julian calendar
    monthsOfYear.february.days = 29;

    // verify if year is a leap year in this calendar
    if (year % 4 !== 0) {
      monthsOfYear.february.days = 28;
    }
  }

  if (year > 1917) {
    // makes the months of year to gregorian calendar
    monthsOfYear.february.days = 28;

    // verify if year is a leap year in this calendar
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      monthsOfYear.february.days = 29;
    }
  }

  function get256thDayOfYear(monthsOfYear = {}) {
    const DAY_OF_THE_PROGRAMMER = 256;
    let countDays = 0; // variable used to find the 256 days
    let monthIndex = 0;

    for (let month in monthsOfYear) {
      monthIndex++;
      const monthLenght = monthsOfYear[month].days;

      // increments the countdays
      if (countDays + monthLenght < DAY_OF_THE_PROGRAMMER) {
        countDays += monthLenght;
        continue; // skip to the next iteration
      }

      let numberOfDaysToArrive256;
      if (countDays + monthLenght > DAY_OF_THE_PROGRAMMER) {
        numberOfDaysToArrive256 = DAY_OF_THE_PROGRAMMER - countDays;
        countDays += numberOfDaysToArrive256;
      }

      // finish the iteration when we found the 256 day
      if (countDays === DAY_OF_THE_PROGRAMMER) {
        return formatDate(monthIndex, numberOfDaysToArrive256);
      }
    }
  }
}
