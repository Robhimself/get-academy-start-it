let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

// min løsning

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D{1,}\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);
