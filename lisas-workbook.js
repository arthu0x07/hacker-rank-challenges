function workbook(n, k, arr) {
  let specialProblems = 0;
  let currentPage = 1;
  const maxProblemsPerPage = k;

  for (let i = 0; i < n; i++) {
    const problemsInThisChapter = arr[i];

    for (
      let problemNumber = 1;
      problemNumber <= problemsInThisChapter;
      problemNumber++
    ) {
      if (problemNumber === currentPage) {
        specialProblems++;
      }

      if (
        problemNumber % maxProblemsPerPage === 0 ||
        problemNumber === problemsInThisChapter
      ) {
        currentPage++;
      }
    }
  }

  return specialProblems;
}
