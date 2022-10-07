function multiplesOf3and5(number) {
  let total = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0) {
      total += i;
    }
    if (i % 5 == 0) {
      total += i;
    }
    if (i == number) {
      return total;
    }
  }
}
multiplesOf3and5(1000);
