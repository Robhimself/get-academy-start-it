function reverseString(str) {
  return str;
}

reverseString("hello");

//   Reverse the provided string.
//   You may need to turn the string into an array before you can reverse it.
//   Your result must be a string.

// min løsning

function reverseString(str) {
  let newStr = str.split("");
  return newStr.reverse().join("");
}

reverseString("hello");
