function staircase(n) {
  for (var i = 1; i <= n; i++) {
    var a = "";
    var b = "";
    for (var j = 1; j <= n - i; j++) {
      a += " ";
    }
    for (var k = 1; k <= i; k++) {
      b += "#";
    }
    console.log(a + b);
  }
}
