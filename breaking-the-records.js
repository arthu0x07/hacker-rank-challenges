function breakingRecords(scores = []) {
  let godRecords = [];
  let highValue = scores[0];

  let badRecords = [];
  let lowestValue = scores[0];

  // Pick High Value;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highValue) {
      highValue = scores[i];
      godRecords = [...godRecords, scores[i]];
    }

    if (scores[i] < lowestValue) {
      lowestValue = scores[i];
      badRecords = [...badRecords, scores[i]];
    }
  }

  return [godRecords.length, badRecords.length];
}
