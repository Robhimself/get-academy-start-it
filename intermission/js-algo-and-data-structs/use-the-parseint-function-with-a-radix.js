function convertToInteger(str) {}

convertToInteger("10011");

//  Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

//  min løsning

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
