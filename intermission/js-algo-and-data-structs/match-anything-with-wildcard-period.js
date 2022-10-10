let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

// min løsning

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line        '.' as a wildcard character.
let result = unRegex.test(exampleStr);
