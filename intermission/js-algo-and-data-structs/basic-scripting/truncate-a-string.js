function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//   Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// min løsning
function truncateString(str, num) {
  if (str.length == num) {
    return str;
  } else if (str.length < num) {
    return str;
  }
  let truncated = str.slice(0, num) + "...";
  return truncated;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// eller mitt forsøk på arrow functions:

const truncateString = (str, num) =>
  str.length <= num ? str : str.slice(0, num) + "...";

truncateString("A-tisket a-tasket A green and yellow basket", 8);
