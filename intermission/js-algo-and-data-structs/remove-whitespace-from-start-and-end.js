let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

// min løsning

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/gi; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
