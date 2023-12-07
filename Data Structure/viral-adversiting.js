function viralAdvertising(n) {
  const finalDay = n;

  let personsWhoLikes = 0;
  let personsWhoReceives = 5;
  let countLikes = 0;

  for (let i = 1; i <= finalDay; i++) {
    personsWhoLikes = Math.floor(personsWhoReceives / 2);
    personsWhoReceives = personsWhoLikes * 3;
    countLikes += personsWhoLikes;
  }

  return countLikes;
}
