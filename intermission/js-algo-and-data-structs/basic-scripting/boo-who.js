function booWho(bool) {
  return bool;
}

booWho(null);

//   Check if a value is classified as a boolean primitive. Return true or false.

// min løsning som arrow function

const booWho = (bool) => (bool === true || bool === false ? true : false);

booWho(null);
