function pageCount(n, p) {
  let pageNeed = p;
  let countFlipPages = 0;
  let fowardPageInView = [0, 1];
  let backwardPageInView;

  // set the startPage in backwards iteration
  if (n % 2 === 0) {
    backwardPageInView = [n, n + 1];
  } else {
    backwardPageInView = [n - 1, n];
  }

  // while any pageInView not has pageNeed
  while (
    fowardPageInView.indexOf(pageNeed) === -1 &&
    backwardPageInView.indexOf(pageNeed) === -1
  ) {
    countFlipPages++;

    // fowards iteration
    fowardPageInView = [fowardPageInView[0] + 2, fowardPageInView[1] + 2];

    // backwards iteration
    backwardPageInView = [backwardPageInView[0] - 2, backwardPageInView[1] - 2];
  }

  return countFlipPages;
}
