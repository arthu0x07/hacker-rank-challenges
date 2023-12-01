function kangaroo(x1, v1, x2, v2) {
  let firstKangarooStartLocation = Number(x1);
  let secondKangarooStartLocation = Number(x2);
  let firstKangarooMetersPerJump = Number(v1);
  let secondKangarooMetersPerJump = Number(v2);

  let answer = false;

  if (firstKangarooMetersPerJump < secondKangarooMetersPerJump) {
    answer = false;
  } else {
    if (
      firstKangarooStartLocation > secondKangarooStartLocation &&
      firstKangarooMetersPerJump > secondKangarooMetersPerJump
    ) {
      answer = false;
    }

    let locationDif = firstKangarooStartLocation - secondKangarooStartLocation;
    let velocityDif = firstKangarooMetersPerJump - secondKangarooMetersPerJump;

    if (Math.abs(locationDif) % Math.abs(velocityDif) === 0) {
      answer = true;
    }
  }

  return answer ? "YES" : "NO";
}
