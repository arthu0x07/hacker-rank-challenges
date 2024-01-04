function birthdayCakeCandles(candles) {
  var max = Math.max(...candles);
  return candles.filter((candle) => candle == max).length;
}
