function countingValleys(steps, path = []) {
  const seaLevel = 0;
  let uphillCount = 0;
  let downHillCount = 0;
  let valeyCount = 0;

  for (let i = 0; i <= path.length; i++) {
    if (Math.abs(uphillCount - downHillCount) == seaLevel && path[i] === "D") {
      valeyCount++;
    }

    if (path[i] === "D") {
      downHillCount = downHillCount + 1;
    }

    if (path[i] === "U") {
      uphillCount = uphillCount + 1;
    }
  }

  return valeyCount;
}
