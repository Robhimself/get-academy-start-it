let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

// min løsning

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
