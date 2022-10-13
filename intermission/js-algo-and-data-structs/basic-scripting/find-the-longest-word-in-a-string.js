function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//   Return the length of the longest word in the provided sentence.
// Your response should be a number.

// min løsning

function findLongestWordLength(str) {
  let newStr = str.split(" ").sort((a, b) => a.length - b.length);
  return newStr.pop().length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
