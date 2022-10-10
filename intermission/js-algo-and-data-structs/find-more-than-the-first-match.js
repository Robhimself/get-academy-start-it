let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

// min løsning

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
