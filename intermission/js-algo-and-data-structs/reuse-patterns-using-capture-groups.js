let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

// min løsning

let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line - match start and end to it doesn't shift places in a string("42 42 42 42") - Can be both "(42 42 42) 42" or "42 (42 42 42)"
let result = reRegex.test(repeatNum);
