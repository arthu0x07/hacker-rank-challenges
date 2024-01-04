function libraryFine(d1, m1, y1, d2, m2, y2) {
  const isSameYear = y1 === y2;
  const isSameMonth = m1 === m2;
  const isSameDayOrBefore = isSameYear && isSameMonth && d1 <= d2;

  if (y1 < y2 || (isSameYear && m1 < m2) || isSameDayOrBefore) {
    return 0;
  }

  if (isSameYear && isSameMonth) {
    return 15 * (d1 - d2);
  }

  if (isSameYear && m1 > m2) {
    return 500 * (m1 - m2);
  }

  return 10000;
}
