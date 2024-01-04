function birthday(s = [], d, m) {
  const maxSegmentLenght = m;
  const maxSegmentValue = d;
  let acceptedSegments = [];

  if (validateSegment(s)) {
    acceptedSegments = [...acceptedSegments, s];
  }

  for (
    let initialSegmentPosition = 0;
    initialSegmentPosition < s.length;
    initialSegmentPosition++
  ) {
    let segment = [s[initialSegmentPosition]];

    for (let x = initialSegmentPosition + 1; x < s.length; x++) {
      segment = [...segment, s[x]];

      if (validateSegment(segment)) {
        acceptedSegments = [...acceptedSegments, segment];
      }
    }
  }

  return acceptedSegments.length;

  function validateSegment(segment = []) {
    if (
      segment.length === maxSegmentLenght &&
      sumArray(segment) == maxSegmentValue
    ) {
      return true;
    }

    return false;
  }

  function sumArray(a = []) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
      sum = sum + a[i];
    }

    return sum;
  }
}
