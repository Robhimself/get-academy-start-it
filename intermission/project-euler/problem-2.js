function fiboEvenSum(n) {
  if (n <= 1) {
    return 0;
  } else {
    let x = 1;
    let y = 2;
    let total = 0;

    for (let i = 2; y <= n; i++) {
      if (y % 2 == 0) {
        total += y;
      }
      [x, y] = [y, x + y];
    }
    return total;
  }
}
