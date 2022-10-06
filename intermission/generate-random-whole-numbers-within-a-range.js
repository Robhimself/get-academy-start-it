function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}

//    Create a function called randomRange that takes a range myMin and myMax and
//    returns a random whole number that's greater than or equal to myMin,
//    and is less than or equal to myMax, inclusive.

// min løsning

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}
