function countApplesAndOranges(s, t, a, b, apples = [], oranges = []) {
  // Write your code here
  let houseStartPoint = s;
  let houseEndPoint = t;

  let appleThreeLocation = a;
  let orangeThreeLocation = b;

  let applesFalling = apples;
  let orangesFalling = oranges;

  let applesInHouse = 0;
  let orangesInHouse = 0;

  applesFalling.forEach((apple) => {
    let distance = apple + appleThreeLocation;

    distance >= houseStartPoint && distance <= houseEndPoint && applesInHouse++;
  });

  orangesFalling.forEach((orange) => {
    let distance = orange + orangeThreeLocation;

    distance >= houseStartPoint &&
      distance <= houseEndPoint &&
      orangesInHouse++;
  });

  console.log(applesInHouse);
  console.log(orangesInHouse);
}
