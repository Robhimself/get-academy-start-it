let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// 1. You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// 2. Usernames can only use alpha-numeric characters.
// 3. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 4. Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.

// min løsning

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
