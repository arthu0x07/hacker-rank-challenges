function equalizeArray(arr = []) {
  const arrayOfIntegers = arr;
  const incidence = {};
  let removedNumberCount = 0;

  for (let a = 0; a < arrayOfIntegers.length; a++) {
    let number = arrayOfIntegers[a];

    if (incidence[number]?.count === undefined) {
      incidence[number] = {
        count: 1,
      };
      continue;
    }

    incidence[String(number)] = {
      count: incidence[number].count + 1,
    };
  }

  let mostIncidenceNumber = -1;
  for (let number in incidence) {
    if (mostIncidenceNumber === -1) {
      mostIncidenceNumber = number;
      continue;
    }

    if (incidence[number].count > incidence[mostIncidenceNumber].count) {
      mostIncidenceNumber = number;
    }
  }

  for (let a = 0; a < arrayOfIntegers.length; a++) {
    if (arrayOfIntegers[a] != mostIncidenceNumber) {
      removedNumberCount++;
    }
  }

  return removedNumberCount;
}
