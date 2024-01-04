function hurdleRace(k, height = []) {
  const jumpHeight = k;
  const hurdlesHeight = height;
  let mostTallHurdle = 0;

  // takes the tall hurdle
  for (let i = 0; i < hurdlesHeight.length; i++) {
    if (mostTallHurdle < hurdlesHeight[i]) {
      mostTallHurdle = hurdlesHeight[i];
    }
  }

  if (jumpHeight >= mostTallHurdle) {
    return 0;
  }

  const potionDoses = Math.abs(jumpHeight - mostTallHurdle);

  return potionDoses;
}
