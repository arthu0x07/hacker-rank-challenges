function catAndMouse(x, y, z) {
  const positionCatA = x;
  const positionCatB = y;
  const positionMouse = z;

  const unitsToCatAReachMouse = Math.abs(positionCatA - positionMouse);
  const unitsToCatBReactMouse = Math.abs(positionCatB - positionMouse);

  if (unitsToCatAReachMouse === unitsToCatBReactMouse) {
    return "Mouse C";
  }

  if (unitsToCatAReachMouse < unitsToCatBReactMouse) {
    return "Cat A";
  }

  return "Cat B";
}
