function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

//   Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

//   min løsning

function repeatStringNumTimes(str, num) {
  let repeated = "";
  for (let i = 0; i < num; i++) {
    repeated += str;
  }
  return repeated;
}

repeatStringNumTimes("abc", 3);
