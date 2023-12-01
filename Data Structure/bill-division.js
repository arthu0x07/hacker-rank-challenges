function bonAppetit(bill = [], k, b) {
  const itemNotConsumedByAnna = k;
  let ammoutAnnaContributed = b;

  let sumBill = 0;
  let sumItensComsumedByAnna = 0;

  // take the sum of itens consumed by anna
  for (let i = 0; i < bill.length; i++) {
    sumBill += Number(bill[i]);

    if (i == itemNotConsumedByAnna) {
      continue;
    }

    sumItensComsumedByAnna += Number(bill[i]);
  }

  let annaRefounds = ammoutAnnaContributed - sumItensComsumedByAnna / 2;

  console.log(annaRefounds === 0 ? "Bon Appetit" : annaRefounds);
}
