let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

// min løsning

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+?/g; // Change this line  '?' is added to bypass all specialcharacters( since \w is short for [A-Za-z0-9_] )
let result = quoteSample.match(alphabetRegexV2).length;
