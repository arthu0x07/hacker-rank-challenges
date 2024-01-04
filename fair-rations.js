function fairRations(B = []) {
  const arrayOfLoavesPerEachCitizien = B;
  let loavesOfBreadDistributed = 0;

  for (let i = 0; i < arrayOfLoavesPerEachCitizien.length - 1; i++) {
    if (arrayOfLoavesPerEachCitizien[i] % 2 !== 0) {
      if (arrayOfLoavesPerEachCitizien[i] % 2 !== 0) {
        arrayOfLoavesPerEachCitizien[i] = arrayOfLoavesPerEachCitizien[i] + 1;
        arrayOfLoavesPerEachCitizien[i + 1] =
          arrayOfLoavesPerEachCitizien[i + 1] + 1;
      }

      loavesOfBreadDistributed = loavesOfBreadDistributed + 2;
    }
  }

  const isEvenArray = arrayOfLoavesPerEachCitizien.every(
    (loaf) => loaf % 2 === 0
  );

  return isEvenArray ? loavesOfBreadDistributed : "NO";
}
