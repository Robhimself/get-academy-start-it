let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

// min løsning

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/i; // Change this line
let result = ohRegex.test(ohStr);
