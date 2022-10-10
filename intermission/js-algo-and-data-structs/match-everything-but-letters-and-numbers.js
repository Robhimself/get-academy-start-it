let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

// min løsning

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line       '\W' in uppercase is the same as [^A-Za-z0-9_].
let result = quoteSample.match(nonAlphabetRegex).length;
