function factorialize(num) {
  return num;
}

factorialize(5);

//   Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// min løsning

function factorialize(num) {
  let newNum = num;
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i < num; i++) {
    newNum = i * newNum;
  }
  return newNum;
}
factorialize(5);
